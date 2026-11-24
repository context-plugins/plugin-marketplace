using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record BulkComplianceResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; } = 200;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinth1? XPlinth { get; init; }

    [JsonPropertyName("results_count")]
    public required int ResultsCount { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<object> Results { get; init; }

    /// <summary>
    /// Inputs that were not usable EINs, echoed back rather than dropped.
    /// </summary>
    [JsonPropertyName("invalid_eins")]
    public required IReadOnlyList<string> InvalidEins { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("report_date")]
    public ReportDate? ReportDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public Sources? Sources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
