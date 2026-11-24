using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Meta data for mutual fund orders
/// </summary>
public record MutualFundMetaData1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public PaginationModel? Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
