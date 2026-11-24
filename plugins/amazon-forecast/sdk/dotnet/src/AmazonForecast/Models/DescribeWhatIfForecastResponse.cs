using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeWhatIfForecastResponse
{
    /// <summary>
    /// The name of the what-if forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WhatIfForecastName")]
    public string? WhatIfForecastName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the what-if forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WhatIfForecastArn")]
    public string? WhatIfForecastArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the what-if analysis that contains this forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WhatIfAnalysisArn")]
    public string? WhatIfAnalysisArn { get; init; }

    /// <summary>
    /// The approximate time remaining to complete the what-if forecast, in minutes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EstimatedTimeRemainingInMinutes")]
    public int? EstimatedTimeRemainingInMinutes { get; init; }

    /// <summary>
    /// The status of the what-if forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if forecast must be ACTIVE before you can access the forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    /// <summary>
    /// If an error occurred, an informational message about the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// When the what-if forecast was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModificationTime")]
    public DateTimeOffset? LastModificationTime { get; init; }

    /// <summary>
    /// An array of Action and TimeSeriesConditions elements that describe what transformations were applied to which time series.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeSeriesTransformations")]
    public IReadOnlyList<TimeSeriesTransformation>? TimeSeriesTransformations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeSeriesReplacementsDataSource")]
    public TimeSeriesReplacementsDataSource? TimeSeriesReplacementsDataSource { get; init; }

    /// <summary>
    /// The quantiles at which probabilistic forecasts are generated. You can specify up to five quantiles per what-if forecast in the CreateWhatIfForecast operation. If you didn't specify quantiles, the default values are ["0.1", "0.5", "0.9"].
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForecastTypes")]
    public IReadOnlyList<string>? ForecastTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
