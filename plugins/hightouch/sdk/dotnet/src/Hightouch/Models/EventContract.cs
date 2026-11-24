using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// A collection of schemas that are used for validating your events.
/// </summary>
public record EventContract
{
    /// <summary>
    /// The contract's id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The contract's name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The contract's slug. If not specified, one will be generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// The contract's description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// What happens to events that aren't defined in the contract.
    /// One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults to ALLOW_EVENT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onUndeclaredSchema")]
    public OnUndeclaredSchema2? OnUndeclaredSchema { get; init; }

    /// <summary>
    /// The definitions for the events in the contract.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<Event2>? Events { get; init; }

    /// <summary>
    /// The id of the workspace that the contract belongs to
    /// </summary>
    [JsonPropertyName("workspaceId")]
    public required double WorkspaceId { get; init; }

    /// <summary>
    /// The timestamp when the contract was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the contract was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The Event Sources linked to the Contract.
    /// </summary>
    [JsonPropertyName("eventSources")]
    public required IReadOnlyList<EventSource> EventSources { get; init; }
}
