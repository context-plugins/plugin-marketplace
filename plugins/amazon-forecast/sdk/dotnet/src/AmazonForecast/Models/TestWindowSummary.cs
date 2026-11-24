using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record TestWindowSummary
{
    /// <summary>
    /// The time at which the test began.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestWindowStart")]
    public DateTimeOffset? TestWindowStart { get; init; }

    /// <summary>
    /// The time at which the test ended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestWindowEnd")]
    public DateTimeOffset? TestWindowEnd { get; init; }

    /// <summary>
    /// The status of the test. Possible status values are: ACTIVE CREATE_IN_PROGRESS CREATE_FAILED
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    /// <summary>
    /// If the test failed, the reason why it failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
