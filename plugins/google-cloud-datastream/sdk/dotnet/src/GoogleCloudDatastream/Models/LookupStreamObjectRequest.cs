using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Request for looking up a specific stream object by its source object identifier.
/// </summary>
public record LookupStreamObjectRequest
{
    /// <summary>
    /// Required. The source object identifier which maps to the stream object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceObjectIdentifier")]
    public SourceObjectIdentifier2? SourceObjectIdentifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
