using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record AuditEvent
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("eventType")]
    public required string EventType { get; init; }

    [JsonPropertyName("actorType")]
    public required string ActorType { get; init; }

    [JsonPropertyName("actorId")]
    public required string? ActorId { get; init; }

    [JsonPropertyName("actorLabel")]
    public required string? ActorLabel { get; init; }

    [JsonPropertyName("resourceType")]
    public required string? ResourceType { get; init; }

    [JsonPropertyName("resourceId")]
    public required string? ResourceId { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object> Metadata { get; init; }

    [JsonPropertyName("ip")]
    public required string? Ip { get; init; }

    [JsonPropertyName("requestId")]
    public required string? RequestId { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Position in the organisation's hash chain. Null on entries written before the chain began.
    /// </summary>
    [JsonPropertyName("chainSeq")]
    public required int? ChainSeq { get; init; }

    /// <summary>
    /// The hash of the entry before this one in the chain.
    /// </summary>
    [JsonPropertyName("prevHash")]
    public required string? PrevHash { get; init; }

    /// <summary>
    /// sha256 over prevHash and this entry's fields.
    /// </summary>
    [JsonPropertyName("rowHash")]
    public required string? RowHash { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
