using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record ProfitAndLossMetaData
{
    /// <summary>
    /// pageNumber for pagination
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page_number")]
    public int? PageNumber { get; init; }

    /// <summary>
    /// Page size
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page_size")]
    public int? PageSize { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
