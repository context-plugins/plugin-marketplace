using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record ProfitAndLossMetaDataWrapper
{
    /// <summary>
    /// Meta data for trade wise data details
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public ProfitAndLossMetaData2? Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
