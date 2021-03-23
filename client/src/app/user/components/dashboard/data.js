export const data_origin = {
    "id": "widget1",
    "chartType": "line",
    "datasets": {
        "2015": [
            {
                "label": "Sales",
                "data": [
                    1.9,
                    3,
                    3.4,
                    2.2,
                    2.9,
                    3.9,
                    2.5,
                    3.8,
                    4.1,
                    3.8,
                    3.2,
                    2.9
                ],
                "fill": "start"
            }
        ],
        "2016": [
            {
                "label": "Sales",
                "data": [
                    2.2,
                    2.9,
                    3.9,
                    2.5,
                    3.8,
                    3.2,
                    2.9,
                    1.9,
                    3,
                    3.4,
                    4.1,
                    3.8
                ],
                "fill": "start"
            }
        ],
        "2017": [
            {
                "label": "Sales",
                "data": [
                    3.9,
                    2.5,
                    3.8,
                    4.1,
                    1.9,
                    3,
                    3.8,
                    3.2,
                    2.9,
                    3.4,
                    2.2,
                    2.9
                ],
                "fill": "start"
            }
        ]
    },
    "labels": [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ],
    "options": {
        "spanGaps": false,
        "legend": {
            "display": false
        },
        "maintainAspectRatio": false,
        "layout": {
            "padding": {
                "top": 32,
                "left": 32,
                "right": 32
            }
        },
        "elements": {
            "point": {
                "radius": 4,
                "borderWidth": 2,
                "hoverRadius": 4,
                "hoverBorderWidth": 2
            },
            "line": {
                "tension": 0
            }
        },
        "scales": {
            "xAxes": [
                {
                    "gridLines": {
                        "display": false,
                        "drawBorder": false,
                        "tickMarkLength": 18
                    },
                    "ticks": {
                        "fontColor": "#ffffff"
                    }
                }
            ],
            "yAxes": [
                {
                    "display": false,
                    "ticks": {
                        "min": 1.5,
                        "max": 5,
                        "stepSize": 0.5
                    }
                }
            ]
        },
        "plugins": {
            "filler": {
                "propagate": false
            },
            "xLabelsOnTop": {
                "active": true
            }
        }
    }
};
export const data_origin_1 = {
    "id": "widget5",
    "chartType": "line",
    "datasets": {
        "yesterday": [
            {
                "label": "Visitors",
                "data": [
                    190,
                    300,
                    340,
                    220,
                    290,
                    390,
                    250,
                    380,
                    410,
                    380,
                    320,
                    290
                ],
                "fill": "start"
            },
            {
                "label": "Page views",
                "data": [
                    2200,
                    2900,
                    3900,
                    2500,
                    3800,
                    3200,
                    2900,
                    1900,
                    3000,
                    3400,
                    4100,
                    3800
                ],
                "fill": "start"
            }
        ],
        "today": [
            {
                "label": "Visitors",
                "data": [
                    410,
                    380,
                    320,
                    290,
                    190,
                    390,
                    250,
                    380,
                    300,
                    340,
                    220,
                    290
                ],
                "fill": "start"
            },
            {
                "label": "Page Views",
                "data": [
                    3000,
                    3400,
                    4100,
                    3800,
                    2200,
                    3200,
                    2900,
                    1900,
                    2900,
                    3900,
                    2500,
                    3800
                ],
                "fill": "start"
            }
        ]
    },
    "labels": [
        "12am",
        "2am",
        "4am",
        "6am",
        "8am",
        "10am",
        "12pm",
        "2pm",
        "4pm",
        "6pm",
        "8pm",
        "10pm"
    ],
    "options": {
        "spanGaps": false,
        "legend": {
            "display": false
        },
        "maintainAspectRatio": false,
        "tooltips": {
            "position": "nearest",
            "mode": "index",
            "intersect": false
        },
        "layout": {
            "padding": {
                "left": 24,
                "right": 32
            }
        },
        "elements": {
            "point": {
                "radius": 4,
                "borderWidth": 2,
                "hoverRadius": 4,
                "hoverBorderWidth": 2
            }
        },
        "scales": {
            "xAxes": [
                {
                    "gridLines": {
                        "display": false
                    },
                    "ticks": {
                        "fontColor": "rgba(0,0,0,0.54)"
                    }
                }
            ],
            "yAxes": [
                {
                    "gridLines": {
                        "tickMarkLength": 16
                    },
                    "ticks": {
                        "stepSize": 1000
                    }
                }
            ]
        },
        "plugins": {
            "filler": {
                "propagate": false
            }
        }
    }
}