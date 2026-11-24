using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateTestSetDiscrepancyReportRequest
{
    /// <summary>
    /// The test set Id for the test set discrepancy report.
    /// </summary>
    [JsonPropertyName("testSetId")]
    public required string TestSetId { get; init; }

    [JsonPropertyName("target")]
    public required TestSetDiscrepancyReportResourceTarget Target { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
