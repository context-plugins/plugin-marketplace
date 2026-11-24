using System;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record CompanyLookalikesRequest2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dedupeSessionId")]
    public Guid? DedupeSessionId { get; init; }

    [JsonPropertyName("seeds")]
    public required CompanyIdentifiersBatch Seeds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude")]
    public CompanyIdentifiersBatch? Exclude { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(100)]
    public int? Limit { get; init; } = 25;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
