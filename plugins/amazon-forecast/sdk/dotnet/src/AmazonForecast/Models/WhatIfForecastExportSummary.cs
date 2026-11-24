using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record WhatIfForecastExportSummary
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the what-if forecast export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WhatIfForecastExportArn")]
    public string? WhatIfForecastExportArn { get; init; }

    /// <summary>
    /// An array of Amazon Resource Names (ARNs) that define the what-if forecasts included in the export.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WhatIfForecastArns")]
    public IReadOnlyList<string>? WhatIfForecastArns { get; init; }

    /// <summary>
    /// The what-if forecast export name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WhatIfForecastExportName")]
    public string? WhatIfForecastExportName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Destination")]
    public DataDestination? Destination { get; init; }

    /// <summary>
    /// The status of the what-if forecast export. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if analysis must be ACTIVE before you can access the analysis.
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
    /// When the what-if forecast export was created.
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
