using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

public record Company
{
    /// <summary>
    /// Unique company identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Company name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Primary stock ticker
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ticker")]
    public string? Ticker { get; init; }

    /// <summary>
    /// Whether this company is the primary subject of the article
    /// </summary>
    [JsonPropertyName("is_primary")]
    public required bool IsPrimary { get; init; }

    /// <summary>
    /// How the company relates to the article. <c>principal</c> (subject, partner, investor, competitor) is the default set; <c>peripheral</c> (source, advisor, passing mention) appears only when <c>include_peripheral=true</c>. Always present.
    /// </summary>
    [JsonPropertyName("association_tier")]
    public required AssociationTier AssociationTier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
