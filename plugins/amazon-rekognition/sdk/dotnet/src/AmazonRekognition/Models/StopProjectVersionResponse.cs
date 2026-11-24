using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record StopProjectVersionResponse
{
    /// <summary>
    /// The current status of the stop operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status3? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
