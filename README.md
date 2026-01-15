# GSeptik

GSeptik is a set of custom Lovelace cards for **Home Assistant** designed to visualize septic tank data in a clear and intuitive way. The project focuses on visual level representation, not on historical charts or complex controls. The goal is to offer simple, readable, and domain-specific UI elements instead of generic gauges or charts.

GSeptik provides visual components to display:

- Septic tank fill level
- Critical level thresholds
- Related sensor data (temperature, pressure, errors)

## Installation

### HACS (planned)

HACS support is planned but not yet available.


### Manual installation

First, download the latest `gseptik.js` file from the releases page and copy it to your Home Assistant `www` directory: `/config/www/gseptik/gseptik.js`. Then add the resource to Home Assistant using one of the following methods.

#### Using the UI

1. Go to Settings → Dashboards → Resources
2. Click Add Resource
3. Set the URL to: `/local/gseptik/gseptik.js`
4. Select **JavaScript Module** as the resource type

#### Using YAML

Add the following to your Lovelace configuration:

```yaml
resources:
  - url: /local/gseptik/gseptik.js
    type: module
```

Restart the browser or clear cache if the card does not appear immediately.

## Usage

After installation, the cards will be available in the dashboard editor as:

- `Custom: GSeptik Tank Card`
- `Custom: GSeptik Column Card`

Each card is configured using YAML.

## Development

### Run development server

Install node libraries by command `npm install`. Run development server by command: `npm start`. Development  server runs on http://localhost:4000.

### Home Assistant server

Run home assistant server by command: `npm run start:hass`. Home Assistant will be available at http://localhost:8123. Home assistant configuration has url of module:


```
frontend:
  themes: !include_dir_merge_named themes
  extra_module_url:
    - http://localhost:4000/gseptik.js
```


## Build module

Run command to build jscript module: `npm install`. The module will be located at `distr` directroy.


