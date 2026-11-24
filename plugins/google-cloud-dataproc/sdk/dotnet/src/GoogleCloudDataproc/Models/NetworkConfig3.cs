using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The configuration specifying the network settings for the Dataproc Metastore service.
/// </summary>
public record NetworkConfig3
{
    /// <summary>
    /// Immutable. The consumer-side network configuration for the Dataproc Metastore instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumers")]
    public IReadOnlyList<Consumer>? Consumers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
