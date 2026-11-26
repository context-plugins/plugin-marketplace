using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record Rates
{
    /// <summary>
    /// ID of the default card account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultCardAccountId")]
    public string? DefaultCardAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funding")]
    public Funding? Funding { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activePromotion")]
    public ActivePromotion? ActivePromotion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
