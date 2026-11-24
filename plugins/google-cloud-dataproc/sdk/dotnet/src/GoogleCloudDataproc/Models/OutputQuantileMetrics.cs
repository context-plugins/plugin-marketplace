using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

public record OutputQuantileMetrics
{
    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordsWritten")]
    public Quantiles? RecordsWritten { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bytesWritten")]
    public Quantiles? BytesWritten { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
