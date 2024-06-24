var map = L.map("map", {
	zoomControl: true,
	maxZoom: 28,
	minZoom: 1,
}).fitBounds([
	[-8.073863296909302, 110.36594751645406],
	[-7.851400527000486, 110.68279906413174],
]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix(
	'<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>'
);
var autolinker = new Autolinker({
	truncate: { length: 30, location: "smart" },
});
var measureControl = new L.Control.Measure({
	position: "topleft",
	primaryLengthUnit: "meters",
	secondaryLengthUnit: "kilometers",
	primaryAreaUnit: "sqmeters",
	secondaryAreaUnit: "hectares",
});
measureControl.addTo(map);
document.getElementsByClassName("leaflet-control-measure-toggle")[0].innerHTML =
	"";
document.getElementsByClassName(
	"leaflet-control-measure-toggle"
)[0].className += " fas fa-ruler";
var bounds_group = new L.featureGroup([]);
function setBounds() {}
map.createPane("pane_OpenStreetMap_0");
map.getPane("pane_OpenStreetMap_0").style.zIndex = 400;
var layer_OpenStreetMap_0 = L.tileLayer(
	"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
	{
		pane: "pane_OpenStreetMap_0",
		opacity: 1.0,
		attribution: "",
		minZoom: 1,
		maxZoom: 28,
		minNativeZoom: 0,
		maxNativeZoom: 19,
	}
);
layer_OpenStreetMap_0;
map.addLayer(layer_OpenStreetMap_0);
function pop_UTM_kidul_1(feature, layer) {
	var popupContent = `
    <table>
        <tr>
            <td colspan="2">
                ${
									feature.properties["NAMOBJ"] !== null
										? autolinker.link(
												feature.properties["NAMOBJ"].toLocaleString()
										  )
										: ""
								}
            </td>
        </tr>
        <tr>
            <td colspan="2">
                ${
									feature.properties["WADMPR"] !== null
										? autolinker.link(
												feature.properties["WADMPR"].toLocaleString()
										  )
										: ""
								}
            </td>
        </tr>
    </table>`;
	layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_UTM_kidul_1_0() {
	return {
		pane: "pane_UTM_kidul_1",
		opacity: 1,
		color: "rgba(24,35,43,1.0)",
		dashArray: "",
		lineCap: "square",
		lineJoin: "bevel",
		weight: 4.0,
		fillOpacity: 0,
		interactive: true,
	};
}
map.createPane("pane_UTM_kidul_1");
map.getPane("pane_UTM_kidul_1").style.zIndex = 401;
map.getPane("pane_UTM_kidul_1").style["mix-blend-mode"] = "normal";
var layer_UTM_kidul_1 = new L.geoJson(json_UTM_kidul_1, {
	attribution: "",
	interactive: true,
	dataVar: "json_UTM_kidul_1",
	layerName: "layer_UTM_kidul_1",
	pane: "pane_UTM_kidul_1",
	onEachFeature: pop_UTM_kidul_1,
	style: style_UTM_kidul_1_0,
});
bounds_group.addLayer(layer_UTM_kidul_1);
map.addLayer(layer_UTM_kidul_1);
function pop_Penggunaan_lahan1_2(feature, layer) {
	var popupContent = `
    <table>
        <tr>
            <th scope="row">Penggunaan Lahan</th>
        </tr>
		  <tr>
            <td>
                ${
									feature.properties["REMARK"] !== null
										? autolinker.link(
												feature.properties["REMARK"].toLocaleString()
										  )
										: ""
								}
            </td>
		  </tr>
    </table>`;
	layer.bindPopup(popupContent, { maxHeight: 400 });
}

var pattern_Penggunaan_lahan1_2_0 = new L.StripePattern({
	weight: 0.3,
	spaceWeight: 2.0,
	color: "#a8c78b",
	opacity: 1.0,
	spaceOpacity: 0,
	angle: 315,
});
pattern_Penggunaan_lahan1_2_0.addTo(map);
var pattern_Penggunaan_lahan1_2_0 = new L.StripePattern({
	weight: 0.3,
	spaceWeight: 2.0,
	color: "#a8c78b",
	opacity: 1.0,
	spaceOpacity: 0,
	angle: 315,
});
pattern_Penggunaan_lahan1_2_0.addTo(map);
function style_Penggunaan_lahan1_2_0(feature) {
	switch (String(feature.properties["REMARK"])) {
		case "Gedung/Bangunan":
			return {
				pane: "pane_Penggunaan_lahan1_2",
				opacity: 1,
				color: "rgba(35,35,35,1.0)",
				dashArray: "",
				lineCap: "butt",
				lineJoin: "miter",
				weight: 1.0,
				fill: true,
				fillOpacity: 1,
				fillColor: "rgba(242,242,242,1.0)",
				interactive: true,
			};
			break;
		case "Perkebunan/Kebun":
			return {
				pane: "pane_Penggunaan_lahan1_2",
				opacity: 1,
				color: "rgba(35,35,35,1.0)",
				dashArray: "",
				lineCap: "butt",
				lineJoin: "miter",
				weight: 1.0,
				fill: true,
				fillOpacity: 1,
				fillColor: "rgba(195,241,133,1.0)",
				interactive: true,
			};
			break;
		case "Permukiman dan Tempat Kegiatan":
			return {
				pane: "pane_Penggunaan_lahan1_2",
				opacity: 1,
				color: "rgba(35,35,35,1.0)",
				dashArray: "",
				lineCap: "butt",
				lineJoin: "miter",
				weight: 1.0,
				fill: true,
				fillOpacity: 1,
				fillColor: "rgba(210,211,213,1.0)",
				interactive: true,
			};
			break;
		case "Sawah":
			return {
				pane: "pane_Penggunaan_lahan1_2",
				stroke: false,
				fillOpacity: 1,
				fillPattern: pattern_Penggunaan_lahan1_2_0,
				interactive: true,
			};
			break;
		case "Sawah Tadah Hujan":
			return {
				pane: "pane_Penggunaan_lahan1_2",
				stroke: false,
				fillOpacity: 1,
				fillPattern: pattern_Penggunaan_lahan1_2_0,
				interactive: true,
			};
			break;
		case "Tegalan/Ladang":
			return {
				pane: "pane_Penggunaan_lahan1_2",
				opacity: 1,
				color: "rgba(35,35,35,1.0)",
				dashArray: "",
				lineCap: "butt",
				lineJoin: "miter",
				weight: 1.0,
				fill: true,
				fillOpacity: 1,
				fillColor: "rgba(234,255,160,1.0)",
				interactive: true,
			};
			break;
		case "Vegetasi Non Budidaya Lainnya":
			return {
				pane: "pane_Penggunaan_lahan1_2",
				opacity: 1,
				color: "rgba(35,35,35,1.0)",
				dashArray: "",
				lineCap: "butt",
				lineJoin: "miter",
				weight: 1.0,
				fill: true,
				fillOpacity: 1,
				fillColor: "rgba(8,98,51,1.0)",
				interactive: true,
			};
			break;
	}
}
map.createPane("pane_Penggunaan_lahan1_2");
map.getPane("pane_Penggunaan_lahan1_2").style.zIndex = 402;
map.getPane("pane_Penggunaan_lahan1_2").style["mix-blend-mode"] = "normal";
var layer_Penggunaan_lahan1_2 = new L.geoJson(json_Penggunaan_lahan1_2, {
	attribution: "",
	interactive: true,
	dataVar: "json_Penggunaan_lahan1_2",
	layerName: "layer_Penggunaan_lahan1_2",
	pane: "pane_Penggunaan_lahan1_2",
	onEachFeature: pop_Penggunaan_lahan1_2,
	style: style_Penggunaan_lahan1_2_0,
});
bounds_group.addLayer(layer_Penggunaan_lahan1_2);
map.addLayer(layer_Penggunaan_lahan1_2);
var osmGeocoder = new L.Control.Geocoder({
	collapsed: true,
	position: "topleft",
	text: "Search",
	title: "Testing",
}).addTo(map);
document.getElementsByClassName("leaflet-control-geocoder-icon")[0].className +=
	" fa fa-search";
document.getElementsByClassName("leaflet-control-geocoder-icon")[0].title +=
	"Search for a place";
var baseMaps = {};

L.control
	.layers(
		baseMaps,
		{
			'Penggunaan lahan<br /><table><tr><td style="text-align: center;"><img src="legend/Penggunaan_lahan1_2_GedungBangunan0.png" /></td><td>Gedung/Bangunan</td></tr><tr><td style="text-align: center;"><img src="legend/Penggunaan_lahan1_2_PerkebunanKebun1.png" /></td><td>Perkebunan/Kebun</td></tr><tr><td style="text-align: center;"><img src="legend/Penggunaan_lahan1_2_PermukimandanTempatKegiatan2.png" /></td><td>Pemukiman dan Tempat Kegiatan</td></tr><tr><td style="text-align: center;"><img src="legend/Penggunaan_lahan1_2_Sawah3.png" /></td><td>Sawah</td></tr><tr><td style="text-align: center;"><img src="legend/Penggunaan_lahan1_2_SawahTadahHujan4.png" /></td><td>Sawah Tadah Hujan</td></tr><tr><td style="text-align: center;"><img src="legend/Penggunaan_lahan1_2_TegalanLadang5.png" /></td><td>Tegalan/Ladang</td></tr><tr><td style="text-align: center;"><img src="legend/Penggunaan_lahan1_2_VegetasiNonBudidayaLainnya6.png" /></td><td>Vegetasi Non Budidaya Lainnya</td></tr></table>':
				layer_Penggunaan_lahan1_2,
			'<img src="legend/UTM_kidul_1.png" /> Kabupaten Gunung Kidul':
				layer_UTM_kidul_1,
		},
		{ collapsed: true }
	)
	.addTo(map);

setBounds();
