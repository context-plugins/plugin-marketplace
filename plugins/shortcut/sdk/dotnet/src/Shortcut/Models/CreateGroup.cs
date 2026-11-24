using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record CreateGroup
{
    /// <summary>
    /// The description of the Group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4096)]
    public string? Description { get; init; }

    /// <summary>
    /// The card aging mode for stories in this Group: "gradual" (fixed fade steps at 1, 2, and 4 weeks), "immediate", or "off" (explicitly disabled for this Group). Set to null to inherit the Workspace default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_aging_mode")]
    public CardAgingMode? CardAgingMode { get; init; }

    /// <summary>
    /// The color you wish to use for the Group in the system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public string? Color { get; init; }

    /// <summary>
    /// The number of days an in-progress Story can go without activity before it is considered stale. Required when card_aging_mode is "immediate"; not allowed otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_aging_threshold_days")]
    public long? CardAgingThresholdDays { get; init; }

    /// <summary>
    /// The Icon id for the avatar of this Group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_icon_id")]
    public Guid? DisplayIconId { get; init; }

    /// <summary>
    /// The mention name of this Group.
    /// </summary>
    [JsonPropertyName("mention_name")]
    [StringLength(63, MinimumLength = 1)]
    public required string MentionName { get; init; }

    /// <summary>
    /// The name of this Group.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(63, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// The color key you wish to use for the Group in the system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color_key")]
    public ColorKeyShortcutGroupsApi? ColorKey { get; init; }

    /// <summary>
    /// The Member ids to add to this Group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("member_ids")]
    [UniqueItems]
    public IReadOnlyList<Guid>? MemberIds { get; init; }

    /// <summary>
    /// The Workflow ids to add to the Group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_ids")]
    public IReadOnlyList<long>? WorkflowIds { get; init; }
}
