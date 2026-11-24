using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record TraceWorkspaceChangesResponse
{
    [JsonPropertyName("trace_id")]
    public required Guid TraceId { get; init; }

    [JsonPropertyName("events")]
    public required IReadOnlyList<EventHudPlatformStorageApi> Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
