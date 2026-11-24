using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// A test set execution run with aggregated results
/// </summary>
public record TestExecution
{
    /// <summary>
    /// Unique identifier of the test execution
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Identifier of the test set that was executed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetId")]
    public string? TestSetId { get; init; }

    /// <summary>
    /// Display name of the test set that was executed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetName")]
    public string? TestSetName { get; init; }

    /// <summary>
    /// Aggregate execution status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusUiPathTestManagerTestExecutionsApi? Status { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when execution began
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedOn")]
    public DateTimeOffset? StartedOn { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when execution completed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("finishedOn")]
    public DateTimeOffset? FinishedOn { get; init; }

    /// <summary>
    /// Total number of test cases in the execution
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalTestCases")]
    public int? TotalTestCases { get; init; }

    /// <summary>
    /// Number of test cases that passed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("passedTestCases")]
    public int? PassedTestCases { get; init; }

    /// <summary>
    /// Number of test cases that failed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedTestCases")]
    public int? FailedTestCases { get; init; }

    /// <summary>
    /// Number of test cases that could not be executed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockedTestCases")]
    public int? BlockedTestCases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
