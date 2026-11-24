using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Alert as returned by the list endpoint. Identical to <c>Alert</c> but also includes <c>owner</c>. The <c>owner</c> field is only populated in list results; it is not returned by the get, create, or update endpoints.
/// </summary>
public record AlertListItem
{
    /// <summary>
    /// Alert ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Alert Name.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; init; } = "";

    /// <summary>
    /// The time when the alert was created (in Unix milliseconds).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public long? CreateTime { get; init; }

    /// <summary>
    /// Last time the alert was modified (in Unix milliseconds).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public long? UpdateTime { get; init; }

    /// <summary>
    /// Last notification activity in Unix milliseconds. Slack advances this on the first provider acceptance for a detection, which does not confirm final delivery.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastAlerted")]
    public long? LastAlerted { get; init; }

    /// <summary>
    /// Slack destinations. Omitted on create means none; omitted on PATCH preserves saved channels; an array replaces them and [] clears them. Null is rejected. Order is preserved as submitted and repeated destinations are collapsed. At least one email or Slack destination must remain. Discover eligible destinations with listAlertSlackChannels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipientsSlackChannels")]
    [MaxLength(50)]
    public IReadOnlyList<AlertSlackChannel>? RecipientsSlackChannels { get; init; }

    /// <summary>
    /// List of emails that will be notified when the alert is triggered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public IReadOnlyList<string>? Recipients { get; init; }

    /// <summary>
    /// Parameters that define when and how an alert is evaluated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public AlertConfig? Config { get; init; }

    /// <summary>
    /// Email of the alert owner (the collaborator with the owner role).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public string? Owner { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
