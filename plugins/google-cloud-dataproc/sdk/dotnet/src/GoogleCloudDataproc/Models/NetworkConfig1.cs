using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. The network configuration contains the endpoint URI(s) of the auxiliary Hive metastore service.
/// </summary>
public record NetworkConfig1
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
