using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Optional flags for including additional response formats
/// </summary>
public record Include5
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
    /// Include ads displayed in ChatGPT response. Paid add-on: one flat +2 credits covers any combination of <c>rawResponse</c>, <c>searchQueries</c>, <c>ads</c> and <c>shopping</c> (<see href="/guides/providers#chatgpt-additional-features">pricing</see>).
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
}
