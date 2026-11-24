using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record MaxSummary
{
    [JsonPropertyName("pagesAttempted")]
    [Minimum(0)]
    public required int PagesAttempted { get; init; }

    [JsonPropertyName("pagesSucceeded")]
    [Minimum(0)]
    public required int PagesSucceeded { get; init; }

    [JsonPropertyName("pagesFailed")]
    [Minimum(0)]
    public required int PagesFailed { get; init; }

    [JsonPropertyName("failedPages")]
    public required IReadOnlyList<MaxFailedPage> FailedPages { get; init; }

    [JsonPropertyName("totalItems")]
    [Minimum(0)]
    public required int TotalItems { get; init; }

    [JsonPropertyName("partial")]
    public required bool Partial { get; init; }

    [JsonPropertyName("terminationReason")]
    public required TerminationReason? TerminationReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
