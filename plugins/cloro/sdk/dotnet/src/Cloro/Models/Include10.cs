using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Optional flags for including additional response data
/// </summary>
public record Include10
{
    /// <summary>
    /// Include raw HTML response from Google search
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public bool? Html { get; init; } = false;

    /// <summary>
    /// Include Google AI Overview in the response. <c>true</c>, <c>{}</c> and <c>{"markdown": false}</c> return the AI Overview without <c>markdown</c>. Send <c>{"markdown": true}</c> to also get <c>result.aioverview.markdown</c>. Paid add-on: one flat +2 credits covers <c>aioverview</c> and <c>paaAioverview</c>, alone or together (<see href="/guides/providers#google-search-multi-page-pricing">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aioverview")]
    public Aioverview3? Aioverview { get; init; }

    /// <summary>
    /// Hydrate AI-Overview-type People Also Ask items with markdown content and sources. Paid add-on: one flat +2 credits covers <c>aioverview</c> and <c>paaAioverview</c>, alone or together (<see href="/guides/providers#google-search-multi-page-pricing">pricing</see>). Each hydrated item adds one scraper fetch (typically 1-2 per page), so responses take longer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paaAioverview")]
    public bool? PaaAioverview { get; init; } = false;

    /// <summary>
    /// Ignored since 8th September 2026. Every redirect link now ships as <c>redirectLink</c> beside its destination, so both are returned without this flag. Requests still sending it behave as if it were absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleGoto")]
    public bool? GoogleGoto { get; init; } = false;
}
