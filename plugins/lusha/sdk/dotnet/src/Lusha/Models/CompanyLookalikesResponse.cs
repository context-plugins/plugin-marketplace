using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyLookalikesResponse
{
    [JsonPropertyName("dedupeSessionId")]
    public required Guid DedupeSessionId { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<V3LookAlikeCompanyResult> Results { get; init; }

    [JsonPropertyName("meta")]
    public required CompanyLookalikesMeta Meta { get; init; }

    /// <summary>
    /// Added to a Prospecting, Enrich, Signals, or Lookalike response when <c>tableId</c> is passed on the request. The primary response is unaffected even if the table write fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableWrite")]
    public TableWrite? TableWrite { get; init; }

    /// <summary>
    /// Credit usage summary for a V3 API request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing")]
    public V3Billing? Billing { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
