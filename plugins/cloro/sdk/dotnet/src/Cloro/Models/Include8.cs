using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Optional flags for including additional response formats
/// </summary>
public record Include8
{
    /// <summary>
    /// Include a URL to the full HTML of the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public bool? Html { get; init; } = false;

    /// <summary>
    /// Include markdown-formatted response in the result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public bool? Markdown { get; init; } = false;

    /// <summary>
    /// Include ChatGPT's raw response payload. Paid add-on: one flat +2 credits covers any combination of <c>rawResponse</c>, <c>searchQueries</c>, <c>ads</c> and <c>shopping</c> (<see href="/guides/providers#chatgpt-additional-features">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawResponse")]
    public bool? RawResponse { get; init; } = false;

    /// <summary>
    /// Include the query fan-out ChatGPT used to generate the response. Paid add-on: one flat +2 credits covers any combination of <c>rawResponse</c>, <c>searchQueries</c>, <c>ads</c> and <c>shopping</c> (<see href="/guides/providers#chatgpt-additional-features">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchQueries")]
    public bool? SearchQueries { get; init; } = false;

    /// <summary>
    /// Include ads displayed in ChatGPT response. ChatGPT currently shows ads only in answers to a follow-up prompt, and far more often on the legacy interface: send <c>prompt</c> as an array with <c>legacy: true</c>. Paid add-on: one flat +2 credits covers any combination of <c>rawResponse</c>, <c>searchQueries</c>, <c>ads</c> and <c>shopping</c> (<see href="/guides/providers#chatgpt-additional-features">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ads")]
    public bool? Ads { get; init; } = false;

    /// <summary>
    /// Include shopping cards and inline products with pricing and offers. Paid add-on: one flat +2 credits covers any combination of <c>rawResponse</c>, <c>searchQueries</c>, <c>ads</c> and <c>shopping</c> (<see href="/guides/providers#chatgpt-additional-features">pricing</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shopping")]
    public bool? Shopping { get; init; } = false;

    /// <summary>
    /// Add the rationale and reviews from each product's sheet as <c>productDetails</c>. Needs <c>shopping</c>. +2 credits on top of <c>shopping</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productDetails")]
    public bool? ProductDetails { get; init; } = false;
}
