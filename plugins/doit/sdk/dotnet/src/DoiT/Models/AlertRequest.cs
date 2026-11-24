using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for creating a new alert.
/// </summary>
public record AlertRequest
{
    /// <summary>
    /// Name of the alert.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(64, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Parameters that define when and how an alert is evaluated.
    /// </summary>
    [JsonPropertyName("config")]
    public required AlertConfig Config { get; init; }

    /// <summary>
    /// Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an array replaces them and [] clears them. Null is rejected. Order is preserved as submitted and repeated destinations are collapsed. At least one email or Slack destination must remain. Discover eligible destinations with listAlertSlackChannels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipientsSlackChannels")]
    [MaxLength(50)]
    public IReadOnlyList<AlertSlackChannelRequest>? RecipientsSlackChannels { get; init; }

    /// <summary>
    /// Email destinations matching allowed customer domains. Omitted on create defaults to the resolved owner email only when no Slack destinations are supplied. An explicit [] means no email and requires a Slack destination. Null is rejected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public IReadOnlyList<string>? Recipients { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
