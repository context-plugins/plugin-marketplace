using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Include Google AI Overview in the response. <c>true</c>, <c>{}</c> and <c>{"markdown": false}</c> return the AI Overview without <c>markdown</c>. Send <c>{"markdown": true}</c> to also get <c>result.aioverview.markdown</c>. Paid add-on: one flat +2 credits covers <c>aioverview</c> and <c>paaAioverview</c>, alone or together (<see href="/guides/providers#google-search-multi-page-pricing">pricing</see>).
/// </summary>
public record Aioverview3
{
    /// <summary>
    /// Include AI Overview formatted as markdown in <c>result.aioverview.markdown</c>. Only <c>true</c> turns it on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public bool? Markdown { get; init; } = false;
}
