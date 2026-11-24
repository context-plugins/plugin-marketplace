using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record UpdateTraceSegmentDestinationResult
{
    /// <summary>
    /// The destination of the trace segments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Destination")]
    public Destination1? Destination { get; init; }

    /// <summary>
    /// The status of the update.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status1? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
