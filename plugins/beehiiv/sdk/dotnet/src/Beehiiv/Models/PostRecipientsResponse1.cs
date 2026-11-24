using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The targeting configuration for this post.
/// </summary>
public record PostRecipientsResponse1
{
    /// <summary>
    /// Web targeting configuration. Absent if the post has no web targets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("web")]
    public PostWebRecipientsResponse2? Web { get; init; }

    /// <summary>
    /// Email targeting configuration. Absent if the post has no email targets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public PostEmailRecipientsResponse2? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
