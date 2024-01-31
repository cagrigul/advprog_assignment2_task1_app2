require([
  "esri/Map", 
  "esri/views/MapView", 
  "esri/layers/FeatureLayer"
], (Map, MapView, FeatureLayer) => {
    // Create a Map instance
    const map = new Map({
      basemap: "dark-gray"
    });

    // Create a MapView instance 
    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-92.603760,38.573936], // Center of Missouri
      zoom: 5
    });

    // Popup template for the first feature layer
    var popupTemplate1 = {
      title: "{NAME}", // NAME alanını başlık olarak kullanıyoruz
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "COUNTY",
              label: "County",
              visible: true
            },
            {
              fieldName: "DIST_CODE",
              label: "District Code",
              visible: true
            }
          ]
        }
      ]
    };

    // Add the first feature layer using its URL
    const featureLayer1 = new FeatureLayer({
      url: "https://services2.arcgis.com/kNS2ppBA4rwAQQZy/arcgis/rest/services/MO_Public_School_Districts/FeatureServer/0",
      popupTemplate: popupTemplate1
    });
    map.add(featureLayer1);

    // Popup template for the second feature layer
    var popupTemplate2 = {
      title: "{Facility}", // Facility alanını başlık olarak kullanıyoruz
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "Address",
              label: "Address",
              visible: true
            },
            {
              fieldName: "City",
              label: "City",
              visible: true
            },
            {
              fieldName: "County",
              label: "County",
              visible: true
            },
            {
              fieldName: "Email",
              label: "Email",
              visible: true
            }
          ]
        }
      ]
    };

    // Add the second feature layer using its URL
    const featureLayer2 = new FeatureLayer({
      url: "https://services2.arcgis.com/kNS2ppBA4rwAQQZy/arcgis/rest/services/MO_Public_Schools/FeatureServer/0",
      popupTemplate: popupTemplate2
    });
    map.add(featureLayer2);
});
