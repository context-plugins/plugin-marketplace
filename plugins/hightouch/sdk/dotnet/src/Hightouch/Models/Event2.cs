using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

public record Event2
{
    /// <summary>
    /// The JSON schema that validates the event. Required.
    /// </summary>
    [JsonPropertyName("schema")]
    public required IReadOnlyDictionary<string, object> Schema { get; init; }

    /// <summary>
    /// What happens to events that contain fields not in the schema.
    /// One of ALLOW_EVENT, BLOCK_EVENT, or OMIT_FIELDS. Optional, defaults to OMIT_FIELDS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onUndeclaredFields")]
    public OnUndeclaredFields? OnUndeclaredFields { get; init; }

    /// <summary>
    /// What happens to events that violate the schema.
    /// One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults to BLOCK_EVENT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onSchemaViolation")]
    public OnSchemaViolation? OnSchemaViolation { get; init; }

    /// <summary>
    /// The event version. Defaults to "default", optional. You probably don't need to set this.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// The event's slug. If not specified, one will be generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// The event's name. Required for track events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The event's type. One of track, identify, page, screen, or group. Required.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
