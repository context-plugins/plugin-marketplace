using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Non-atomic: partial successes commit.
/// <para>
/// Per-input failures are surfaced individually instead of failing the whole batch.
/// ``unchanged`` carries no-ops (target progress equals existing progress).
/// </para>
/// </summary>
public record BulkStatusResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("succeeded")]
    public IReadOnlyList<Guid>? Succeeded { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unchanged")]
    public IReadOnlyList<Guid>? Unchanged { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failures")]
    public IReadOnlyList<BulkStatusFailure>? Failures { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
