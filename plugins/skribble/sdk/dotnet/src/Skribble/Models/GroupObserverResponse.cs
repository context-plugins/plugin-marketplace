using System;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record GroupObserverResponse
{
    /// <summary>
    /// Unique observer identifier.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Observer type.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "GROUP";

    /// <summary>
    /// Timestamp when the observer was invited.
    /// </summary>
    [JsonPropertyName("invited_at")]
    public required DateTimeOffset InvitedAt { get; init; }

    /// <summary>
    /// Identifier of the user or API key that invited the observer.
    /// </summary>
    [JsonPropertyName("invited_by")]
    public required string InvitedBy { get; init; }

    /// <summary>
    /// Information about the group observer.
    /// </summary>
    [JsonPropertyName("group_info")]
    public required GroupInfo GroupInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
