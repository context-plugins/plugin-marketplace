using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record ClinicalNoteGenerationResult
{
    /// <summary>
    /// Holds the Amazon S3 URI for the output Clinical Note.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClinicalNoteOutputLocation")]
    public string? ClinicalNoteOutputLocation { get; init; }

    /// <summary>
    /// Holds the Amazon S3 URI for the output Transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptOutputLocation")]
    public string? TranscriptOutputLocation { get; init; }

    /// <summary>
    /// The status of the clinical note generation. Possible Values: IN_PROGRESS FAILED COMPLETED After audio streaming finishes, and you send a MedicalScribeSessionControlEvent event (with END_OF_SESSION as the Type), the status is set to IN_PROGRESS. If the status is COMPLETED, the analytics completed successfully, and you can find the results at the locations specified in ClinicalNoteOutputLocation and TranscriptOutputLocation. If the status is FAILED, FailureReason provides details about the failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAmazonTranscribeServiceOperationsApi? Status { get; init; }

    /// <summary>
    /// If ClinicalNoteGenerationResult is FAILED, information about why it failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
