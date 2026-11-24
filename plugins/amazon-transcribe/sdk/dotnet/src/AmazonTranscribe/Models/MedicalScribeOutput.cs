using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record MedicalScribeOutput
{
    /// <summary>
    /// Holds the Amazon S3 URI for the Transcript.
    /// </summary>
    [JsonPropertyName("TranscriptFileUri")]
    public required string TranscriptFileUri { get; init; }

    /// <summary>
    /// Holds the Amazon S3 URI for the Clinical Document.
    /// </summary>
    [JsonPropertyName("ClinicalDocumentUri")]
    public required string ClinicalDocumentUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
