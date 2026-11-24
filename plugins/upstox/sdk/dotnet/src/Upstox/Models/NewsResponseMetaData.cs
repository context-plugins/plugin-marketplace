using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record NewsResponseMetaData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public NewsResponsePageData? Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
