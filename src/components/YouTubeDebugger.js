import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    setBitRate = () => {
        this.setState ( 
            {
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            }
        )
    }
    
    
    setRes = () => {
        this.setState (
            {
                settings: {
                    ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                        resolution: '720p'
                    }
                }
            }
        )
    }

    render() { 
        return ( 
            <div>
                <button
                className='bitrate'
                onClick={this.setBitRate}
                >
                Bitrate
                </button>

                <button
                className='resolution'
                onClick={this.setRes}
                >
                Resolution
                </button>
            </div>
         );
    }
}
 
export default YouTubeDebugger;