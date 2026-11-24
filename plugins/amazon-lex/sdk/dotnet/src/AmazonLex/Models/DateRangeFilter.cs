using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DateRangeFilter
{
    /// <summary>
    /// A timestamp indicating the start date for the date range filter.
    /// </summary>
    [JsonPropertyName("startDateTime")]
    public required DateTimeOffset StartDateTime { get; init; }

    /// <summary>
    /// A timestamp indicating the end date for the date range filter.
    /// </summary>
    [JsonPropertyName("endDateTime")]
    public required DateTimeOffset EndDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
