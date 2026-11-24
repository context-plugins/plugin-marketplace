using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PollResponseItem
{
    /// <summary>
    /// The unique identifier of the poll response.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription that responded. Null if the subscription has been permanently deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_id")]
    public string? SubscriptionId { get; init; }

    /// <summary>
    /// Whether the associated subscription has been deleted or permanently removed.
    /// </summary>
    [JsonPropertyName("subscription_deleted")]
    public required bool SubscriptionDeleted { get; init; }

    /// <summary>
    /// The UUID of the poll choice selected.
    /// </summary>
    [JsonPropertyName("poll_choice_id")]
    public required string PollChoiceId { get; init; }

    /// <summary>
    /// The text label of the poll choice selected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("poll_choice_label")]
    public string? PollChoiceLabel { get; init; }

    /// <summary>
    /// The time the response was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required int CreatedAt { get; init; }

    /// <summary>
    /// Optional extended feedback provided by the subscriber.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extended_feedback")]
    public string? ExtendedFeedback { get; init; }

    /// <summary>
    /// The prefixed ID of the post where the response was collected. Only included when <c>expand[]=post</c> is specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("post_id")]
    public string? PostId { get; init; }

    /// <summary>
    /// The title of the post where the response was collected. Only included when <c>expand[]=post</c> is specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("post_title")]
    public string? PostTitle { get; init; }

    /// <summary>
    /// The scheduled publication date of the post where the response was collected. Measured in seconds since the Unix epoch. Only included when <c>expand[]=post</c> is specified. Null if the post is not yet scheduled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("post_publish_date")]
    public int? PostPublishDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
