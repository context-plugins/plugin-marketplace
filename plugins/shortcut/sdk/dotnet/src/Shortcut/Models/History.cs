using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Shortcut.Models.AnyOf;

namespace Shortcut.Models;

/// <summary>
/// A history item is a group of actions that represent a transactional change to a Story.
/// </summary>
public record History
{
    /// <summary>
    /// The name of the actor that performed the action, if it can be determined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actor_name")]
    public string? ActorName { get; init; }

    /// <summary>
    /// The date when the change occurred.
    /// </summary>
    [JsonPropertyName("changed_at")]
    public required string ChangedAt { get; init; }

    /// <summary>
    /// The ID of the primary entity that has changed, if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_id")]
    public PrimaryId? PrimaryId { get; init; }

    /// <summary>
    /// An array of objects affected by the change. Reference objects provide basic information for the entities reference in the history actions. Some have specific fields, but they always contain an id, entity_type, and a name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("references")]
    public IReadOnlyList<Reference>? References { get; init; }

    /// <summary>
    /// An array of actions that were performed for the change.
    /// </summary>
    [JsonPropertyName("actions")]
    public required IReadOnlyList<Action1> Actions { get; init; }

    /// <summary>
    /// The ID of the member who performed the change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("member_id")]
    public Guid? MemberId { get; init; }

    /// <summary>
    /// The ID of the webhook that handled the change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    public string? ExternalId { get; init; }

    /// <summary>
    /// The ID representing the change for the story.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The version of the change format.
    /// </summary>
    [JsonPropertyName("version")]
    public string Version { get; } = "v1";

    /// <summary>
    /// The ID of the webhook that handled the change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook_id")]
    public string? WebhookId { get; init; }

    /// <summary>
    /// The ID of the automation that performed the change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("automation_id")]
    public Guid? AutomationId { get; init; }
}
