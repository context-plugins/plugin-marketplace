using System;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record TransactionIntervalReportingReportsApi
{
    /// <summary>
    /// Start date of the transaction interval
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    public DateTimeOffset? From { get; init; }

    /// <summary>
    /// End date of the transaction interval
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("to")]
    public DateTimeOffset? To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
