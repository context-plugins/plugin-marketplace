using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Models;

public record MaxProgress
{
    [JsonPropertyName("currentPage")]
    [Minimum(0)]
    public required int CurrentPage { get; init; }

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

    [JsonPropertyName("itemsCollected")]
    [Minimum(0)]
    public required int ItemsCollected { get; init; }

    [JsonPropertyName("consecutiveFailures")]
    [Minimum(0)]
    [Maximum(5)]
    public required int ConsecutiveFailures { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
