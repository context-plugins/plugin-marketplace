using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record SearchMetaData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public PaginationModel? Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
