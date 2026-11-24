using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Google Cloud Storage destination for output content. For every single input document (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateDocumentRequest). While the input documents are being processed, we write/update an index file <c>index.csv</c> under <c>gcs_destination.output_uri_prefix</c> (for example, gs://translation_output/index.csv) The index file is generated/updated as new files are being translated. The format is: input_document,target_language_code,translation_output,error_output, glossary_translation_output,glossary_error_output <c>input_document</c> is one file we matched using gcs_source.input_uri. <c>target_language_code</c> is provided in the request. <c>translation_output</c> contains the translations. (details provided below) <c>error_output</c> contains the error message during processing of the file. Both translations_file and errors_file could be empty strings if we have no content to output. <c>glossary_translation_output</c> and <c>glossary_error_output</c> are the translated output/error when we apply glossaries. They could also be empty if we have no content to output. Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written). Since index.csv will be keeping updated during the process, please make sure there is no custom retention policy applied on the output bucket that may avoid file updating. (https://cloud.google.com/storage/docs/bucket-lock#retention-policy) The naming format of translation output files follows (for target language code [trg]): <c>translation_output</c>: <c>gs://translation_output/a_b_c_[trg]_translation.[extension]</c> <c>glossary_translation_output</c>: <c>gs://translation_test/a_b_c_[trg]_glossary_translation.[extension]</c>. The output document will maintain the same file format as the input document. The naming format of error output files follows (for target language code [trg]): <c>error_output</c>: <c>gs://translation_test/a_b_c_[trg]_errors.txt</c> <c>glossary_error_output</c>: <c>gs://translation_test/a_b_c_[trg]_glossary_translation.txt</c>. The error output is a txt file containing error details.
/// </summary>
public record GcsDestination2
{
    /// <summary>
    /// Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'. 'output_uri_prefix' must end with "/" and start with "gs://". One 'output_uri_prefix' can only be used by one batch translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputUriPrefix")]
    public string? OutputUriPrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
