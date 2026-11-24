using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record LeadEvent
{
    [JsonPropertyName("event")]
    public string Event { get; } = "lead";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public string? Timestamp { get; init; }

    [JsonPropertyName("eventId")]
    public required string EventId { get; init; }

    [JsonPropertyName("eventName")]
    public required string EventName { get; init; }

    [JsonPropertyName("click")]
    public required Click Click { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public object? Link { get; init; }

    [JsonPropertyName("customer")]
    public required Customer Customer { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.id</c> instead.
    /// </summary>
    [JsonPropertyName("click_id")]
    public required string ClickId { get; init; }

    /// <summary>
    /// Deprecated. Use <c>link.id</c> instead.
    /// </summary>
    [JsonPropertyName("link_id")]
    public required string LinkId { get; init; }

    /// <summary>
    /// Deprecated. Use <c>link.domain</c> instead.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// Deprecated. Use <c>link.key</c> instead.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.url</c> instead.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.continent</c> instead.
    /// </summary>
    [JsonPropertyName("continent")]
    public required string Continent { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.country</c> instead.
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.city</c> instead.
    /// </summary>
    [JsonPropertyName("city")]
    public required string City { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.device</c> instead.
    /// </summary>
    [JsonPropertyName("device")]
    public required string Device { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.browser</c> instead.
    /// </summary>
    [JsonPropertyName("browser")]
    public required string Browser { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.os</c> instead.
    /// </summary>
    [JsonPropertyName("os")]
    public required string Os { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.qr</c> instead.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Deprecated. Use <c>click.ip</c> instead.
    /// </summary>
    [JsonPropertyName("ip")]
    public required string Ip { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
