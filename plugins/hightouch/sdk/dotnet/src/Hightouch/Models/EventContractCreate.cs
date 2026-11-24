using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// The input for creating a Contract
/// </summary>
public record EventContractCreate
{
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
}
