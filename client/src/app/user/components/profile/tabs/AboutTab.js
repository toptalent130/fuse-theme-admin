import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProfile, setDisplayUpdateToast, updateUserPassword } from '../../../actions/authActions';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '100%',
	  },
	},
	toast: {
		'& > *': {
			position: 'fixed', 
			right: '50px', 
			top: '100px'
		}
	}
  }));

function AboutTab() {
	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');
	const [avatar, setAvatar] = useState(null);

	const [cPass, setCPass] = useState('');
	const [nPass, setNPass] = useState('');
	const [cnPass, setCNPass] = useState('');

	const id = useSelector(({user}) => user.auth.user.id);
	const displayText = useSelector(({user}) =>user.auth.displayText);
	const errors = useSelector(({ user })=> user.errors);
	const user = useSelector(({ user }) => user.auth.user);
	const shouldToast = useSelector(({ user }) => user.auth.shouldDisplayUpdateToast);
	const [show, setShow] = React.useState({
		showPassword: false
	  });
	const handleClickShowPassword = () => {
		setShow({ showPassword: !show.showPassword });
	  };
	useEffect(() => {
		setFName(user.first_name);
		setLName(user.last_name);
	}, [user,errors]);

	useEffect(() => {
		if(shouldToast) {
			toast(displayText);
		}
		dispatch(setDisplayUpdateToast(false));
	}, [shouldToast])

	const dispatch = useDispatch();

	const classes = useStyles();

	const handleFNameChange = (e) => {
		setFName(e.target.value);
	}
	const handleLNameChange = (e) => {
		setLName(e.target.value);
	}

	const handleSave = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('avatar', avatar);
		formData.append('first_name', fName);
		formData.append('last_name', lName);
		formData.append('email', user.email);

		dispatch(updateUserProfile(formData));
	}

	const handleCPassChange = (e) =>{
		setCPass(e.target.value);
	}
	const handleNPassChange =(e) =>{
		setNPass(e.target.value);
	}
	const handleCNPassChange =(e) =>{
		setCNPass(e.target.value);
	}
	const handleSavePass = (e) =>{
		e.preventDefault();
		let sendData ={
			id: id,
			current_password: cPass,
			new_password: nPass,
			confirm_password: cnPass
		}
		dispatch(updateUserPassword(sendData))
	}

	function canBeSubmittedInfo() {
		return fName != '' && avatar != null;
	}
	// function canBeSubmittedPassword() {
	// 	return cPass != '' && cnPass != '' && nPass != '' && cnPass === nPass;
	// }


	return (
		<div className="md:flex max-w-2xl">
			<ToastContainer className={classes.toast}/>
			<div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<Card className="w-full mb-16 rounded-8 shadow">
						<AppBar position="static" elevation={0}>
							<Toolbar className="px-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
									General Information
								</Typography>
							</Toolbar>
						</AppBar>
						<CardContent>
							<form className={classes.root} noValidate autoComplete="off">
								<div className="mb-24 w-full">
									{/* <Typography className="font-bold mb-4 text-15">First Name</Typography> */}
									<TextField 
										id="id-first-name" 
										label="first name" 
										variant="outlined"
										className="w-full"
										value={fName}
										onChange={handleFNameChange}
										error={fName == ''}
									/>
								</div>

								<div className="mb-24 w-full">
									{/* <Typography className="font-bold mb-4 text-15">Last Name</Typography> */}
									<TextField 
										id="id-second-name" 
										label="last name" 
										variant="outlined"
										className="w-full"
										value={lName} 
										onChange={handleLNameChange}
									/>
								</div>

								<div className="mb-24 w-full">
									{/* <Typography className="font-bold mb-4 text-15">Email</Typography> */}
									<TextField 
										id="id-email" 
										label="email" 
										variant="outlined"
										className="w-full"
										InputProps={{
											readOnly: true,
										}}
										value={user.email}
									/>
								</div>

								<div className="mb-24 w-full">
									<Typography className="font-bold mb-4 text-15">Avatar</Typography>
									<TextField 
										id="id-avatar" 
										label="" 
										className="w-full"
										InputProps={{
											readOnly: true,
										}}
										onChange={(e) => {setAvatar(e.target.files[0])}}
										type="file"
										error={avatar == null}
									/>
								</div>
								<Button variant="contained" color="primary" onClick={handleSave} disabled={!canBeSubmittedInfo()}>
									Save
								</Button>
							</form>
						</CardContent>
					</Card>
					<Card className="w-full mb-16 rounded-8 shadow">
						<AppBar position="static" elevation={0}>
							<Toolbar className="px-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
									Reset Password
								</Typography>
							</Toolbar>
						</AppBar>
						<CardContent>
							<form className={classes.root} noValidate autoComplete="off">
								<div className="mb-24 w-full">
									{/* <Typography className="font-bold mb-4 text-15">Current Password</Typography> */}
									<FormControl variant="outlined" className="w-full">
										<InputLabel id="current-password">Current Password</InputLabel>
										<OutlinedInput
											labelId="current-password" 
											label="Current Password" 
											variant="outlined"
											className="w-full"
											value={cPass}
											type={show.showPassword ? 'text' : 'password'}
											onChange={handleCPassChange}
											error={errors.current_password}
											endAdornment={
												<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
												>
													{show.showPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
												</InputAdornment>
											}
										/>
										<FormHelperText className="text-red-600">{errors.current_password}</FormHelperText>
									</FormControl>
								</div>

								<div className="mb-24 w-full">
									<FormControl variant="outlined" className="w-full">
										<InputLabel id="new-password">New Password</InputLabel>
										<OutlinedInput
											labelId="new-password" 
											label="New Password" 
											variant="outlined"
											className="w-full"
											value={nPass}
											onChange={handleNPassChange}
											type={show.showPassword ? 'text' : 'password'}
											error={errors.new_password}
											endAdornment={
												<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
												>
													{show.showPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
												</InputAdornment>
											}
										/>
									</FormControl>
									<FormHelperText className="text-red-600">{errors.new_password}</FormHelperText>
								</div>

								<div className="mb-24 w-full">
									<FormControl variant="outlined" className="w-full">
										<InputLabel id="confirm-password">Confirm Password</InputLabel>
										<OutlinedInput
											id="confirm-password" 
											label="Confirm Password"
											variant="outlined"
											className="w-full"
											value={cnPass}
											onChange={handleCNPassChange}
											type={show.showPassword ? 'text' : 'password'}
											error={errors.confirm_password}
											endAdornment={
												<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
												>
													{show.showPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
												</InputAdornment>
											}
										/>
										<FormHelperText className="text-red-600">{errors.confirm_password}</FormHelperText>
									</FormControl>
								</div>
								<Button variant="contained" color="primary" onClick={handleSavePass}>
									Change Password
								</Button>
							</form>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	);
}

export default AboutTab;
