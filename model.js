import { Schema, model} from "mongoose"

//Entity

const schemaBalade = new Schema({
    identifiant: String,
    adresse: String,
    code_postal: String,
    parcours: [String],
    url_image: String,
    copyright_image: String,
    legende: String,
    categorie: String,
    nom_poi: String,
    date_saisie: String,
    mot_cle: [String],
    ville: String,
    texte_intro: String,
    texte_description: String,
    url_site: String,
    fichier_image: {
        thumbnail: Boolean,
        filename: String,
        format: String,
        width: Number,
        mimetype: String,
        etag: String,
        id: String,
        last_synchronized: String
    },
    color_summary: [String],
    height: Number,
    geo_shape: {       
    }
});

const Balade = model("Balades", schemaBalade);

export {Balade};
