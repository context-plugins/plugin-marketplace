using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ListMonitorEvaluationsRequest
{
    /// <summary>
    /// If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of monitoring results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the monitor resource to get results from.
    /// </summary>
    [JsonPropertyName("MonitorArn")]
    public required string MonitorArn { get; init; }

    /// <summary>
    /// An array of filters. For each filter, provide a condition and a match statement. The condition is either IS or IS_NOT, which specifies whether to include or exclude the resources that match the statement from the list. The match statement consists of a key and a value. Filter properties Condition - The condition to apply. Valid values are IS and IS_NOT. Key - The name of the parameter to filter on. The only valid value is EvaluationState. Value - The value to match. Valid values are only SUCCESS or FAILURE. For example, to list only successful monitor evaluations, you would specify: "Filters":
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Filters")]
    public IReadOnlyList<Filter>? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
