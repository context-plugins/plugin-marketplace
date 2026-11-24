using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StartCelebrityRecognitionResponse
{
    /// <summary>
    /// The identifier for the celebrity recognition analysis job. Use JobId to identify the job in a subsequent call to GetCelebrityRecognition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
