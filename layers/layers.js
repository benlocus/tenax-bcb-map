var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Boston_Zoning_Subdistricts_1 = new ol.format.GeoJSON();
var features_Boston_Zoning_Subdistricts_1 = format_Boston_Zoning_Subdistricts_1.readFeatures(json_Boston_Zoning_Subdistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boston_Zoning_Subdistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boston_Zoning_Subdistricts_1.addFeatures(features_Boston_Zoning_Subdistricts_1);
var lyr_Boston_Zoning_Subdistricts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boston_Zoning_Subdistricts_1, 
                style: style_Boston_Zoning_Subdistricts_1,
                interactive: true,
                title: '<img src="styles/legend/Boston_Zoning_Subdistricts_1.png" /> Boston_Zoning_Subdistricts'
            });
var format_school_buffer_2_2 = new ol.format.GeoJSON();
var features_school_buffer_2_2 = format_school_buffer_2_2.readFeatures(json_school_buffer_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_buffer_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_buffer_2_2.addFeatures(features_school_buffer_2_2);
var lyr_school_buffer_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_school_buffer_2_2, 
                style: style_school_buffer_2_2,
                interactive: true,
                title: '<img src="styles/legend/school_buffer_2_2.png" /> school_buffer_2'
            });
var format_school_buffer_1_3 = new ol.format.GeoJSON();
var features_school_buffer_1_3 = format_school_buffer_1_3.readFeatures(json_school_buffer_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_buffer_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_buffer_1_3.addFeatures(features_school_buffer_1_3);
var lyr_school_buffer_1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_school_buffer_1_3, 
                style: style_school_buffer_1_3,
                interactive: true,
                title: '<img src="styles/legend/school_buffer_1_3.png" /> school_buffer_1'
            });
var format_BCBOpenLocations_4 = new ol.format.GeoJSON();
var features_BCBOpenLocations_4 = format_BCBOpenLocations_4.readFeatures(json_BCBOpenLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BCBOpenLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BCBOpenLocations_4.addFeatures(features_BCBOpenLocations_4);
var lyr_BCBOpenLocations_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BCBOpenLocations_4, 
                style: style_BCBOpenLocations_4,
                interactive: true,
                title: '<img src="styles/legend/BCBOpenLocations_4.png" /> BCB Open Locations'
            });
var format_ExistingCannabisBuffer_5 = new ol.format.GeoJSON();
var features_ExistingCannabisBuffer_5 = format_ExistingCannabisBuffer_5.readFeatures(json_ExistingCannabisBuffer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingCannabisBuffer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingCannabisBuffer_5.addFeatures(features_ExistingCannabisBuffer_5);
var lyr_ExistingCannabisBuffer_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ExistingCannabisBuffer_5, 
                style: style_ExistingCannabisBuffer_5,
                interactive: true,
                title: '<img src="styles/legend/ExistingCannabisBuffer_5.png" /> Existing Cannabis Buffer'
            });
var format_wip_bcb_locations_6 = new ol.format.GeoJSON();
var features_wip_bcb_locations_6 = format_wip_bcb_locations_6.readFeatures(json_wip_bcb_locations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wip_bcb_locations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wip_bcb_locations_6.addFeatures(features_wip_bcb_locations_6);
var lyr_wip_bcb_locations_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wip_bcb_locations_6, 
                style: style_wip_bcb_locations_6,
                interactive: true,
                title: '<img src="styles/legend/wip_bcb_locations_6.png" /> wip_bcb_locations'
            });
var format_loopnetopenlistings2_7 = new ol.format.GeoJSON();
var features_loopnetopenlistings2_7 = format_loopnetopenlistings2_7.readFeatures(json_loopnetopenlistings2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_loopnetopenlistings2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_loopnetopenlistings2_7.addFeatures(features_loopnetopenlistings2_7);
var lyr_loopnetopenlistings2_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_loopnetopenlistings2_7, 
                style: style_loopnetopenlistings2_7,
                interactive: true,
                title: '<img src="styles/legend/loopnetopenlistings2_7.png" /> loopnet-open-listings-2'
            });
var format_loopnetopenlistings_8 = new ol.format.GeoJSON();
var features_loopnetopenlistings_8 = format_loopnetopenlistings_8.readFeatures(json_loopnetopenlistings_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_loopnetopenlistings_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_loopnetopenlistings_8.addFeatures(features_loopnetopenlistings_8);
var lyr_loopnetopenlistings_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_loopnetopenlistings_8, 
                style: style_loopnetopenlistings_8,
                interactive: true,
                title: '<img src="styles/legend/loopnetopenlistings_8.png" /> loopnet-open-listings'
            });
var format_Allowed_9 = new ol.format.GeoJSON();
var features_Allowed_9 = format_Allowed_9.readFeatures(json_Allowed_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Allowed_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Allowed_9.addFeatures(features_Allowed_9);
var lyr_Allowed_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Allowed_9, 
                style: style_Allowed_9,
                interactive: true,
                title: '<img src="styles/legend/Allowed_9.png" /> Allowed'
            });

lyr_Positronretina_0.setVisible(true);lyr_Boston_Zoning_Subdistricts_1.setVisible(true);lyr_school_buffer_2_2.setVisible(true);lyr_school_buffer_1_3.setVisible(true);lyr_BCBOpenLocations_4.setVisible(true);lyr_ExistingCannabisBuffer_5.setVisible(true);lyr_wip_bcb_locations_6.setVisible(true);lyr_loopnetopenlistings2_7.setVisible(true);lyr_loopnetopenlistings_8.setVisible(true);lyr_Allowed_9.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Boston_Zoning_Subdistricts_1,lyr_school_buffer_2_2,lyr_school_buffer_1_3,lyr_BCBOpenLocations_4,lyr_ExistingCannabisBuffer_5,lyr_wip_bcb_locations_6,lyr_loopnetopenlistings2_7,lyr_loopnetopenlistings_8,lyr_Allowed_9];
lyr_Boston_Zoning_Subdistricts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZONE_': 'ZONE_', 'DISTRICT': 'DISTRICT', 'MAPNO': 'MAPNO', 'ARTICLE': 'ARTICLE', 'SUBDISTRIC': 'SUBDISTRIC', 'Unique_Cod': 'Unique_Cod', 'FAR': 'FAR', 'Zone_Desc': 'Zone_Desc', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'Urban_Labe': 'Urban_Labe', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_school_buffer_2_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'BLDG_ID': 'BLDG_ID', 'BLDG_NAME': 'BLDG_NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'ZIPCODE': 'ZIPCODE', 'CSP_SCH_ID': 'CSP_SCH_ID', 'SCH_ID': 'SCH_ID', 'SCH_NAME': 'SCH_NAME', 'SCH_LABEL': 'SCH_LABEL', 'SCH_TYPE': 'SCH_TYPE', 'SHARED': 'SHARED', 'COMPLEX': 'COMPLEX', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_school_buffer_1_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SCHID': 'SCHID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'TOWN_MAIL': 'TOWN_MAIL', 'TOWN': 'TOWN', 'STATE': 'STATE', 'ZIP': 'ZIP', 'PRINCIPAL': 'PRINCIPAL', 'PHONE': 'PHONE', 'FAX': 'FAX', 'GRADES': 'GRADES', 'TYPE': 'TYPE', });
lyr_BCBOpenLocations_4.set('fieldAliases', {'Main Entit': 'Main Entit', 'Trade Name': 'Trade Name', 'Facility A': 'Facility A', 'Facility N': 'Facility N', 'Facility Z': 'Facility Z', 'Type of Ma': 'Type of Ma', 'Applicatio': 'Applicatio', 'Seeking Bo': 'Seeking Bo', 'Submitted': 'Submitted', 'result_num': 'result_num', 'status': 'status', 'formatted_': 'formatted_', 'place_id': 'place_id', 'location_t': 'location_t', 'latlong': 'latlong', });
lyr_ExistingCannabisBuffer_5.set('fieldAliases', {'Main Entit': 'Main Entit', 'Trade Name': 'Trade Name', 'Facility A': 'Facility A', 'Facility N': 'Facility N', 'Facility Z': 'Facility Z', 'Type of Ma': 'Type of Ma', 'Applicatio': 'Applicatio', 'Seeking Bo': 'Seeking Bo', 'Submitted': 'Submitted', 'result_num': 'result_num', 'status': 'status', 'formatted_': 'formatted_', 'place_id': 'place_id', 'location_t': 'location_t', 'latlong': 'latlong', });
lyr_wip_bcb_locations_6.set('fieldAliases', {'Main Entit': 'Main Entit', 'Trade Name': 'Trade Name', 'Facility A': 'Facility A', 'Facility N': 'Facility N', 'Facility Z': 'Facility Z', 'Type of Ma': 'Type of Ma', 'Applicatio': 'Applicatio', 'Seeking Bo': 'Seeking Bo', 'Submitted': 'Submitted', 'result_num': 'result_num', 'status': 'status', 'formatted_': 'formatted_', 'place_id': 'place_id', 'location_t': 'location_t', 'latlong': 'latlong', });
lyr_loopnetopenlistings2_7.set('fieldAliases', {'Zoning Dis': 'Zoning Dis', 'Address': 'Address', 'City': 'City', 'Good/Bad P': 'Good/Bad P', 'Broker Lin': 'Broker Lin', 'Yes/No': 'Yes/No', 'Zoning Sub': 'Zoning Sub', 'Subdistric': 'Subdistric', 'Notes': 'Notes', 'Desirabili': 'Desirabili', 'Type': 'Type', 'Size (sq/f': 'Size (sq/f', 'Price': 'Price', 'Price/SqFt': 'Price/SqFt', 'Lease/Sale': 'Lease/Sale', 'Notes_1': 'Notes_1', 'Name': 'Name', 'Number': 'Number', 'Email': 'Email', 'Date': 'Date', 'Method': 'Method', 'Interest': 'Interest', 'Notes_2': 'Notes_2', 'LOI Status': 'LOI Status', 'Blackstone': 'Blackstone', 'result_num': 'result_num', 'status': 'status', 'formatted_': 'formatted_', 'place_id': 'place_id', 'location_t': 'location_t', 'latlong': 'latlong', });
lyr_loopnetopenlistings_8.set('fieldAliases', {'Zoning Dis': 'Zoning Dis', 'Address': 'Address', 'Good/Bad P': 'Good/Bad P', 'Broker Lin': 'Broker Lin', 'Yes/No': 'Yes/No', 'Zoning Sub': 'Zoning Sub', 'Subdistric': 'Subdistric', 'Notes': 'Notes', 'Desirabili': 'Desirabili', 'Type': 'Type', 'Size (sq/f': 'Size (sq/f', 'Price': 'Price', 'Price/SqFt': 'Price/SqFt', 'Lease/Sale': 'Lease/Sale', 'Notes_1': 'Notes_1', 'Name': 'Name', 'Number': 'Number', 'Email': 'Email', 'Date': 'Date', 'Method': 'Method', 'Interest': 'Interest', 'Notes_2': 'Notes_2', 'LOI Status': 'LOI Status', 'Blackstone': 'Blackstone', 'result_num': 'result_num', 'status': 'status', 'formatted_': 'formatted_', 'place_id': 'place_id', 'location_t': 'location_t', 'latlong': 'latlong', });
lyr_Allowed_9.set('fieldAliases', {'Zoning Dis': 'Zoning Dis', 'Address': 'Address', 'Good/Bad P': 'Good/Bad P', 'Broker Lin': 'Broker Lin', 'Yes/No': 'Yes/No', 'Zoning Sub': 'Zoning Sub', 'Subdistric': 'Subdistric', 'Notes': 'Notes', 'Desirabili': 'Desirabili', 'Type': 'Type', 'Size (sq/f': 'Size (sq/f', 'Price': 'Price', 'Price/SqFt': 'Price/SqFt', 'Lease/Sale': 'Lease/Sale', 'Notes_1': 'Notes_1', 'Name': 'Name', 'Number': 'Number', 'Email': 'Email', 'Date': 'Date', 'Method': 'Method', 'Interest': 'Interest', 'Notes_2': 'Notes_2', 'LOI Status': 'LOI Status', 'Blackstone': 'Blackstone', 'result_num': 'result_num', 'status': 'status', 'formatted_': 'formatted_', 'place_id': 'place_id', 'location_t': 'location_t', 'latlong': 'latlong', });
lyr_Boston_Zoning_Subdistricts_1.set('fieldImages', {'OBJECTID': '', 'ZONE_': '', 'DISTRICT': '', 'MAPNO': '', 'ARTICLE': '', 'SUBDISTRIC': '', 'Unique_Cod': '', 'FAR': '', 'Zone_Desc': '', 'Shape_STAr': '', 'Shape_STLe': '', 'Urban_Labe': '', 'Shape__Are': '', 'Shape__Len': '', });
lyr_school_buffer_2_2.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'BLDG_ID': '', 'BLDG_NAME': '', 'ADDRESS': '', 'CITY': '', 'ZIPCODE': '', 'CSP_SCH_ID': '', 'SCH_ID': '', 'SCH_NAME': '', 'SCH_LABEL': '', 'SCH_TYPE': '', 'SHARED': '', 'COMPLEX': '', 'POINT_X': '', 'POINT_Y': '', });
lyr_school_buffer_1_3.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'SCHID': '', 'NAME': '', 'ADDRESS': '', 'TOWN_MAIL': '', 'TOWN': '', 'STATE': '', 'ZIP': '', 'PRINCIPAL': '', 'PHONE': '', 'FAX': '', 'GRADES': '', 'TYPE': '', });
lyr_BCBOpenLocations_4.set('fieldImages', {'Main Entit': 'TextEdit', 'Trade Name': 'TextEdit', 'Facility A': 'TextEdit', 'Facility N': 'TextEdit', 'Facility Z': 'TextEdit', 'Type of Ma': 'TextEdit', 'Applicatio': 'TextEdit', 'Seeking Bo': 'TextEdit', 'Submitted': 'TextEdit', 'result_num': 'TextEdit', 'status': 'TextEdit', 'formatted_': 'TextEdit', 'place_id': 'TextEdit', 'location_t': 'TextEdit', 'latlong': 'TextEdit', });
lyr_ExistingCannabisBuffer_5.set('fieldImages', {'Main Entit': '', 'Trade Name': '', 'Facility A': '', 'Facility N': '', 'Facility Z': '', 'Type of Ma': '', 'Applicatio': '', 'Seeking Bo': '', 'Submitted': '', 'result_num': '', 'status': '', 'formatted_': '', 'place_id': '', 'location_t': '', 'latlong': '', });
lyr_wip_bcb_locations_6.set('fieldImages', {'Main Entit': '', 'Trade Name': '', 'Facility A': '', 'Facility N': '', 'Facility Z': '', 'Type of Ma': '', 'Applicatio': '', 'Seeking Bo': '', 'Submitted': '', 'result_num': '', 'status': '', 'formatted_': '', 'place_id': '', 'location_t': '', 'latlong': '', });
lyr_loopnetopenlistings2_7.set('fieldImages', {'Zoning Dis': '', 'Address': '', 'City': '', 'Good/Bad P': '', 'Broker Lin': '', 'Yes/No': '', 'Zoning Sub': '', 'Subdistric': '', 'Notes': '', 'Desirabili': '', 'Type': '', 'Size (sq/f': '', 'Price': '', 'Price/SqFt': '', 'Lease/Sale': '', 'Notes_1': '', 'Name': '', 'Number': '', 'Email': '', 'Date': '', 'Method': '', 'Interest': '', 'Notes_2': '', 'LOI Status': '', 'Blackstone': '', 'result_num': '', 'status': '', 'formatted_': '', 'place_id': '', 'location_t': '', 'latlong': '', });
lyr_loopnetopenlistings_8.set('fieldImages', {'Zoning Dis': '', 'Address': '', 'Good/Bad P': '', 'Broker Lin': '', 'Yes/No': '', 'Zoning Sub': '', 'Subdistric': '', 'Notes': '', 'Desirabili': '', 'Type': '', 'Size (sq/f': '', 'Price': '', 'Price/SqFt': '', 'Lease/Sale': '', 'Notes_1': '', 'Name': '', 'Number': '', 'Email': '', 'Date': '', 'Method': '', 'Interest': '', 'Notes_2': '', 'LOI Status': '', 'Blackstone': '', 'result_num': '', 'status': '', 'formatted_': '', 'place_id': '', 'location_t': '', 'latlong': '', });
lyr_Allowed_9.set('fieldImages', {'Zoning Dis': '', 'Address': '', 'Good/Bad P': '', 'Broker Lin': '', 'Yes/No': '', 'Zoning Sub': '', 'Subdistric': '', 'Notes': '', 'Desirabili': '', 'Type': '', 'Size (sq/f': '', 'Price': '', 'Price/SqFt': '', 'Lease/Sale': '', 'Notes_1': '', 'Name': '', 'Number': '', 'Email': '', 'Date': '', 'Method': '', 'Interest': '', 'Notes_2': '', 'LOI Status': '', 'Blackstone': '', 'result_num': '', 'status': '', 'formatted_': '', 'place_id': '', 'location_t': '', 'latlong': '', });
lyr_Boston_Zoning_Subdistricts_1.set('fieldLabels', {'OBJECTID': 'no label', 'ZONE_': 'no label', 'DISTRICT': 'no label', 'MAPNO': 'no label', 'ARTICLE': 'no label', 'SUBDISTRIC': 'no label', 'Unique_Cod': 'no label', 'FAR': 'no label', 'Zone_Desc': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', 'Urban_Labe': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_school_buffer_2_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'BLDG_ID': 'no label', 'BLDG_NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'ZIPCODE': 'no label', 'CSP_SCH_ID': 'no label', 'SCH_ID': 'no label', 'SCH_NAME': 'no label', 'SCH_LABEL': 'no label', 'SCH_TYPE': 'no label', 'SHARED': 'no label', 'COMPLEX': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', });
lyr_school_buffer_1_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SCHID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'TOWN_MAIL': 'no label', 'TOWN': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'PRINCIPAL': 'no label', 'PHONE': 'no label', 'FAX': 'no label', 'GRADES': 'no label', 'TYPE': 'no label', });
lyr_BCBOpenLocations_4.set('fieldLabels', {'Main Entit': 'no label', 'Trade Name': 'no label', 'Facility A': 'no label', 'Facility N': 'no label', 'Facility Z': 'no label', 'Type of Ma': 'no label', 'Applicatio': 'no label', 'Seeking Bo': 'no label', 'Submitted': 'no label', 'result_num': 'no label', 'status': 'no label', 'formatted_': 'no label', 'place_id': 'no label', 'location_t': 'no label', 'latlong': 'no label', });
lyr_ExistingCannabisBuffer_5.set('fieldLabels', {'Main Entit': 'no label', 'Trade Name': 'no label', 'Facility A': 'no label', 'Facility N': 'no label', 'Facility Z': 'no label', 'Type of Ma': 'no label', 'Applicatio': 'no label', 'Seeking Bo': 'no label', 'Submitted': 'no label', 'result_num': 'no label', 'status': 'no label', 'formatted_': 'no label', 'place_id': 'no label', 'location_t': 'no label', 'latlong': 'no label', });
lyr_wip_bcb_locations_6.set('fieldLabels', {'Main Entit': 'no label', 'Trade Name': 'no label', 'Facility A': 'no label', 'Facility N': 'no label', 'Facility Z': 'no label', 'Type of Ma': 'no label', 'Applicatio': 'no label', 'Seeking Bo': 'no label', 'Submitted': 'no label', 'result_num': 'no label', 'status': 'no label', 'formatted_': 'no label', 'place_id': 'no label', 'location_t': 'no label', 'latlong': 'no label', });
lyr_loopnetopenlistings2_7.set('fieldLabels', {'Zoning Dis': 'no label', 'Address': 'no label', 'City': 'no label', 'Good/Bad P': 'no label', 'Broker Lin': 'no label', 'Yes/No': 'no label', 'Zoning Sub': 'no label', 'Subdistric': 'no label', 'Notes': 'no label', 'Desirabili': 'no label', 'Type': 'no label', 'Size (sq/f': 'no label', 'Price': 'no label', 'Price/SqFt': 'no label', 'Lease/Sale': 'no label', 'Notes_1': 'no label', 'Name': 'no label', 'Number': 'no label', 'Email': 'no label', 'Date': 'no label', 'Method': 'no label', 'Interest': 'no label', 'Notes_2': 'no label', 'LOI Status': 'no label', 'Blackstone': 'no label', 'result_num': 'no label', 'status': 'no label', 'formatted_': 'no label', 'place_id': 'no label', 'location_t': 'no label', 'latlong': 'no label', });
lyr_loopnetopenlistings_8.set('fieldLabels', {'Zoning Dis': 'no label', 'Address': 'no label', 'Good/Bad P': 'no label', 'Broker Lin': 'no label', 'Yes/No': 'no label', 'Zoning Sub': 'no label', 'Subdistric': 'no label', 'Notes': 'no label', 'Desirabili': 'no label', 'Type': 'no label', 'Size (sq/f': 'no label', 'Price': 'no label', 'Price/SqFt': 'no label', 'Lease/Sale': 'no label', 'Notes_1': 'no label', 'Name': 'no label', 'Number': 'no label', 'Email': 'no label', 'Date': 'no label', 'Method': 'no label', 'Interest': 'no label', 'Notes_2': 'no label', 'LOI Status': 'no label', 'Blackstone': 'no label', 'result_num': 'no label', 'status': 'no label', 'formatted_': 'no label', 'place_id': 'no label', 'location_t': 'no label', 'latlong': 'no label', });
lyr_Allowed_9.set('fieldLabels', {'Zoning Dis': 'no label', 'Address': 'no label', 'Good/Bad P': 'no label', 'Broker Lin': 'no label', 'Yes/No': 'no label', 'Zoning Sub': 'no label', 'Subdistric': 'no label', 'Notes': 'no label', 'Desirabili': 'no label', 'Type': 'no label', 'Size (sq/f': 'no label', 'Price': 'no label', 'Price/SqFt': 'no label', 'Lease/Sale': 'no label', 'Notes_1': 'no label', 'Name': 'no label', 'Number': 'no label', 'Email': 'no label', 'Date': 'no label', 'Method': 'no label', 'Interest': 'no label', 'Notes_2': 'no label', 'LOI Status': 'no label', 'Blackstone': 'no label', 'result_num': 'no label', 'status': 'no label', 'formatted_': 'no label', 'place_id': 'no label', 'location_t': 'no label', 'latlong': 'no label', });
lyr_Allowed_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});