using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

public record InputQuantileMetrics
{
    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bytesRead")]
    public Quantiles? BytesRead { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordsRead")]
    public Quantiles? RecordsRead { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
