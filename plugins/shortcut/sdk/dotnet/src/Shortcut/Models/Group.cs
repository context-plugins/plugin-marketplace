using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// A Group.
/// </summary>
public record Group
{
    /// <summary>
    /// The Shortcut application url for the Group.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The description of the Group.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Whether or not the Group is archived.
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The card aging mode for stories in this Group: "gradual" or "immediate". Null if card aging is off.
    /// </summary>
    [JsonPropertyName("card_aging_mode")]
    public required CardAgingMode1? CardAgingMode { get; init; }

    /// <summary>
    /// The hex color to be displayed with the Group (for example, "#ff0000").
    /// </summary>
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public required string? Color { get; init; }

    /// <summary>
    /// The number of days an in-progress Story can go without activity before it is considered stale.
    /// </summary>
    [JsonPropertyName("card_aging_threshold_days")]
    public required long? CardAgingThresholdDays { get; init; }

    /// <summary>
    /// The number of stories assigned to the group which are in a started workflow state.
    /// </summary>
    [JsonPropertyName("num_stories_started")]
    public required long NumStoriesStarted { get; init; }

    /// <summary>
    /// The mention name of the Group.
    /// </summary>
    [JsonPropertyName("mention_name")]
    [MinLength(1)]
    [RegularExpression("^[a-z0-9\\-\\_\\.]+$")]
    public required string MentionName { get; init; }

    /// <summary>
    /// The name of the Group.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// The color key to be displayed with the Group.
    /// </summary>
    [JsonPropertyName("color_key")]
    public required ColorKey1? ColorKey { get; init; }

    /// <summary>
    /// The total number of stories assigned to the group.
    /// </summary>
    [JsonPropertyName("num_stories")]
    public required long NumStories { get; init; }

    /// <summary>
    /// The number of epics assigned to the group which are in the started workflow state.
    /// </summary>
    [JsonPropertyName("num_epics_started")]
    public required long NumEpicsStarted { get; init; }

    /// <summary>
    /// The last instant when this group was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The number of stories assigned to the group which are in a backlog workflow state.
    /// </summary>
    [JsonPropertyName("num_stories_backlog")]
    public required long NumStoriesBacklog { get; init; }

    /// <summary>
    /// The id of the Group.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application.
    /// </summary>
    [JsonPropertyName("display_icon")]
    public required Icon DisplayIcon { get; init; }

    /// <summary>
    /// The ID of the default workflow for stories created in this group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_workflow_id")]
    public long? DefaultWorkflowId { get; init; }

    /// <summary>
    /// The Member IDs contain within the Group.
    /// </summary>
    [JsonPropertyName("member_ids")]
    public required IReadOnlyList<Guid> MemberIds { get; init; }

    /// <summary>
    /// The Workflow IDs contained within the Group.
    /// </summary>
    [JsonPropertyName("workflow_ids")]
    public required IReadOnlyList<long> WorkflowIds { get; init; }

    /// <summary>
    /// The instant when this group was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
