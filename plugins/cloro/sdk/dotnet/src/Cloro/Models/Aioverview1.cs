using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Include Google AI Overview in the response. Paid add-on: one flat +2 credits covers <c>aioverview</c> and <c>paaAioverview</c>, alone or together (<see href="/guides/providers#google-search-multi-page-pricing">pricing</see>).
/// </summary>
public record Aioverview1
{
    /// <summary>
    /// Include AI Overview formatted as markdown
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public bool? Markdown { get; init; } = false;
}
