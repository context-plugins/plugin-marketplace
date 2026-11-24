using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StartPersonTrackingResponse
{
    /// <summary>
    /// The identifier for the person detection job. Use JobId to identify the job in a subsequent call to GetPersonTracking.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
