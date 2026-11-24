using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Surfe.Core.Models;
using Surfe.Models.Enums;

namespace Surfe.Models;

public record PeopleEnrichmentResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enrichmentID")]
    public Guid? EnrichmentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public JobStatus? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percentCompleted")]
    public int? PercentCompleted { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("people")]
    public IReadOnlyList<EnrichedPerson>? People { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
