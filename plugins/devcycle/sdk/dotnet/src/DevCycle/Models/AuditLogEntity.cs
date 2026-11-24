using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record AuditLogEntity
{
    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    [JsonPropertyName("a0_user")]
    public required string A0User { get; init; }

    [JsonPropertyName("changes")]
    public required IReadOnlyList<object> Changes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
