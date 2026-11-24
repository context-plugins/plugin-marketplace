using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Partial update. Only supplied fields change. Recipient-only and config-field-only requests are supported. Identical effective updates preserve updateTime and the notification revision. Empty recipient arrays now clear destinations instead of being ignored; direct API clients relying on the previous behavior must omit those fields instead.
/// </summary>
public record AlertUpdateRequest
{
    /// <summary>
    /// Alert name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(64, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// Only supplied configuration fields change. A zero value is a valid threshold. Fields cannot be null except ignoreValuesRange.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public AlertConfigUpdate? Config { get; init; }

    /// <summary>
    /// Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an array replaces them and [] clears them. Null is rejected. Order is preserved as submitted and repeated destinations are collapsed. At least one email or Slack destination must remain. Discover eligible destinations with listAlertSlackChannels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipientsSlackChannels")]
    [MaxLength(50)]
    public IReadOnlyList<AlertSlackChannelRequest>? RecipientsSlackChannels { get; init; }

    /// <summary>
    /// Email destinations. Omission preserves saved emails; an array replaces them; [] clears them and requires a Slack destination in the resulting alert. Null is rejected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public IReadOnlyList<string>? Recipients { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
