/**
 * Defines the a metabse question piece
 *
 */
const metabase = require("./metabase");
module.exports = {
    extend: "apostrophe-pieces",
    name: 'question',
    label: 'Metabase Question',
    pluralLabel: 'Questions',
    addFields: [
        // title of the question
        {
            name: 'title',
            label: 'Question Title',
            type: 'string',
            required: true
        },
        // public embed url of the question
        {
            name: 'publicUrl',
            label: 'Public Embed Url',
            type: 'url',
            required: true
        },
        // question number of the url
        {
            name: 'questionId',
            label: 'Question Id',
            type: 'integer',
            required: false
        }
    ]
}