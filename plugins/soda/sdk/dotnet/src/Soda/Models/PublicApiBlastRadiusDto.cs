using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record PublicApiBlastRadiusDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assetType")]
    public RcaAssetTypeDto? AssetType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
