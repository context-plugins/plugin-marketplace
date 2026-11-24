using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record ContactLookalikesResponse2
{
    [JsonPropertyName("dedupeSessionId")]
    public required Guid? DedupeSessionId { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<LookalikeContactResult> Results { get; init; }

    [JsonPropertyName("meta")]
    public required ContactLookalikesMeta Meta { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditsCharged")]
    [Minimum(0)]
    public int? CreditsCharged { get; init; }
}
