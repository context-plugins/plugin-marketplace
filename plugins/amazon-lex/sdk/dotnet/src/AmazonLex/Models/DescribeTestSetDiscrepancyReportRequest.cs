using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeTestSetDiscrepancyReportRequest
{
    /// <summary>
    /// The unique identifier of the test set discrepancy report.
    /// </summary>
    [JsonPropertyName("testSetDiscrepancyReportId")]
    public required string TestSetDiscrepancyReportId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
