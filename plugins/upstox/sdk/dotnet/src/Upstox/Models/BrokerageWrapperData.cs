using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record BrokerageWrapperData
{
    /// <summary>
    /// Response data for charges details
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("charges")]
    public BrokerageData2? Charges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
