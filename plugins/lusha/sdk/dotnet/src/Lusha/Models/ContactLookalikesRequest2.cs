using System;
using System.Text.Json.Serialization;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record ContactLookalikesRequest2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dedupeSessionId")]
    public Guid? DedupeSessionId { get; init; }

    [JsonPropertyName("seeds")]
    public required ContactIdentifiersBatch2? Seeds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude")]
    public ContactIdentifiersBatch2? Exclude { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(100)]
    public int? Limit { get; init; } = 25;
}
