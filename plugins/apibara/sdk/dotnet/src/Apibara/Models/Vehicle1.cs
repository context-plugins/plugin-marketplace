using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Models.Enums;

namespace Apibara.Models;

public record Vehicle1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public long? Id { get; init; }

    [JsonPropertyName("platform")]
    public required Platform Platform { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform_id")]
    public int? PlatformId { get; init; }

    [JsonPropertyName("lot_number")]
    public required string LotNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vin")]
    public string? Vin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
