using System;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record CompanyLookalikesRequest
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

    /// <summary>
    /// Optional. If provided, results are also persisted to this table. See the Tables API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableId")]
    public string? TableId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
