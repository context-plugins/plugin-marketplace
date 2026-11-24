using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Request message for running a stream.
/// </summary>
public record RunStreamRequest
{
    /// <summary>
    /// Optional. The CDC strategy of the stream. If not set, the system's default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cdcStrategy")]
    public CdcStrategy2? CdcStrategy { get; init; }

    /// <summary>
    /// Optional. Update the stream without validating it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("force")]
    public bool? Force { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
