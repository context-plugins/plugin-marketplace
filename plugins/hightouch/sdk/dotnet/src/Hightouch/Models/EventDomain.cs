using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// A collection of event and component schemas used for validating events.
/// </summary>
public record EventDomain
{
    /// <summary>
    /// The domain's id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The domain's name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The domain's slug. If not specified, one will be generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// The domain's description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// What happens to events that aren't defined in the domain.
    /// One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults to ALLOW_EVENT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onUndeclaredSchema")]
    public OnUndeclaredSchema? OnUndeclaredSchema { get; init; }

    /// <summary>
    /// Path into the event payload where the schema version is read/written.
    /// Used by codegen wrappers to inject the version they were generated from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemaVersionPath")]
    public IReadOnlyList<string>? SchemaVersionPath { get; init; }

    /// <summary>
    /// The definitions for the events in the domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<Event>? Events { get; init; }

    /// <summary>
    /// The reusable components defined in the domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("components")]
    public IReadOnlyList<EventDomainComponent>? Components { get; init; }

    /// <summary>
    /// The id of the workspace that the domain belongs to
    /// </summary>
    [JsonPropertyName("workspaceId")]
    public required double WorkspaceId { get; init; }

    /// <summary>
    /// The timestamp when the domain was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the domain was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The Event Sources linked to the Domain.
    /// </summary>
    [JsonPropertyName("eventSources")]
    public required IReadOnlyList<EventSource> EventSources { get; init; }
}
