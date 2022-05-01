# Location-Services-Project
In order for the project to work correctly, the needed nodejs and react modules need to be installed.
After that, amplify must be set up with
```bash
amplify init
```
Then the map must be added with 
```bash
amplify add geo
```
The default settings will work
Next, push this to the cloud
```bash
amplify push
```
Then add the extra libraries
```bash
npm install aws-amplify
npm install -S maplibre-gl@1 maplibre-gl-js-amplify
```
The exact steps followed were found at https://aws.amazon.com/blogs/mobile/add-maps-to-your-app-in-3-steps-with-aws-amplify-geo/
