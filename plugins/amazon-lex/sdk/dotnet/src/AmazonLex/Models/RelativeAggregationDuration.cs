using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record RelativeAggregationDuration
{
    /// <summary>
    /// The type of time period that the timeValue field represents.
    /// </summary>
    [JsonPropertyName("timeDimension")]
    public required TimeDimension TimeDimension { get; init; }

    /// <summary>
    /// The period of the time window to gather statistics for. The valid value depends on the setting of the timeDimension field. Hours - 1/3/6/12/24 Days - 3 Weeks - 1/2
    /// </summary>
    [JsonPropertyName("timeValue")]
    public required int TimeValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
