using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

/// <summary>
/// The issuer this event belongs to, inlined so a calendar can be rendered without a lookup per row. <c>id</c> is the same value as <c>company_id</c>. <c>null</c> only when the issuer is not published by this API.
/// </summary>
public record CompanyNordicFinancialNewsCalendarEventsApi
{
    /// <summary>
    /// Unique company identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Company name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Primary stock ticker. <c>null</c> for an unlisted issuer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ticker")]
    public string? Ticker { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
