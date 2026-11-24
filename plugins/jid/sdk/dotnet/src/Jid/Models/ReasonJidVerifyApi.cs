using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Models.AnyOf;
using Jid.Models.Enums;

namespace Jid.Models;

public record ReasonJidVerifyApi
{
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("requirement")]
    public required string Requirement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public KindJidVerifyApi? Kind { get; init; }

    [JsonPropertyName("met")]
    public required Met1 Met { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effect")]
    public EffectJidVerifyApi? Effect { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    [JsonPropertyName("fact_ids")]
    public required IReadOnlyList<string> FactIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source1? Source { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_url")]
    public string? SourceUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verified_at")]
    public DateTimeOffset? VerifiedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fresh_until")]
    public DateTimeOffset? FreshUntil { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authority")]
    public string? Authority { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
