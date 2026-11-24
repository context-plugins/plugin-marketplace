using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DescribeTestSetDiscrepancyReportResponse
{
    /// <summary>
    /// The unique identifier of the test set discrepancy report to describe.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetDiscrepancyReportId")]
    public string? TestSetDiscrepancyReportId { get; init; }

    /// <summary>
    /// The test set Id for the test set discrepancy report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetId")]
    public string? TestSetId { get; init; }

    /// <summary>
    /// The time and date of creation for the test set discrepancy report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    public TestSetDiscrepancyReportResourceTarget? Target { get; init; }

    /// <summary>
    /// The status for the test set discrepancy report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetDiscrepancyReportStatus")]
    public TestSetDiscrepancyReportStatus? TestSetDiscrepancyReportStatus { get; init; }

    /// <summary>
    /// The date and time of the last update for the test set discrepancy report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDataTime")]
    public DateTimeOffset? LastUpdatedDataTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetDiscrepancyTopErrors")]
    public TestSetDiscrepancyErrors? TestSetDiscrepancyTopErrors { get; init; }

    /// <summary>
    /// Pre-signed Amazon S3 URL to download the test set discrepancy report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetDiscrepancyRawOutputUrl")]
    public string? TestSetDiscrepancyRawOutputUrl { get; init; }

    /// <summary>
    /// The failure report for the test set discrepancy report generation action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureReasons")]
    public IReadOnlyList<string>? FailureReasons { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
