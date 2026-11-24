using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record GetTranscriptionJobRequest
{
    /// <summary>
    /// The name of the transcription job you want information about. Job names are case sensitive.
    /// </summary>
    [JsonPropertyName("TranscriptionJobName")]
    public required string TranscriptionJobName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
