using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record DeleteTranscriptionJobRequest
{
    /// <summary>
    /// The name of the transcription job you want to delete. Job names are case sensitive.
    /// </summary>
    [JsonPropertyName("TranscriptionJobName")]
    public required string TranscriptionJobName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
