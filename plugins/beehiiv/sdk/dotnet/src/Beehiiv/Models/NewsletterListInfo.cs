using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record NewsletterListInfo
{
    /// <summary>
    /// The prefixed ID of the newsletter list.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the newsletter list.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The URL-friendly slug of the newsletter list.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// A description of the newsletter list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The status of the newsletter list.
    /// </summary>
    [JsonPropertyName("status")]
    public required NewsletterListStatus Status { get; init; }

    /// <summary>
    /// Whether new subscribers are automatically subscribed to this list.
    /// </summary>
    [JsonPropertyName("auto_subscribe")]
    public required bool AutoSubscribe { get; init; }

    /// <summary>
    /// The number of active subscribers on this list.
    /// </summary>
    [JsonPropertyName("subscriber_count")]
    public required int SubscriberCount { get; init; }

    /// <summary>
    /// The time the newsletter list was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required int CreatedAt { get; init; }

    /// <summary>
    /// The time the newsletter list was last updated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required int UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
