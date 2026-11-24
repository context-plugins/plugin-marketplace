using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// The result data for this resource. Which fields are populated depends on the resultType. For security_risk: critical, high, medium, low. For potential_daily_savings: value. For potential_daily_savings_with_recommendation: value, current, recommendation. For potential_daily_savings_with_cluster_agent: value, agentInstalled.
/// </summary>
public record Result
{
    /// <summary>
    /// the daily saving amount for this result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// number of critical security risks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("critical")]
    public int? Critical { get; init; }

    /// <summary>
    /// number of high security risks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("high")]
    public int? High { get; init; }

    /// <summary>
    /// number of medium security risks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("medium")]
    public int? Medium { get; init; }

    /// <summary>
    /// number of low security risks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("low")]
    public int? Low { get; init; }

    /// <summary>
    /// the current state (i.e. current instance type)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current")]
    public string? Current { get; init; }

    /// <summary>
    /// the recommended state (i.e. recommended instance type)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendation")]
    public string? Recommendation { get; init; }

    /// <summary>
    /// true if the agent is installed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentInstalled")]
    public bool? AgentInstalled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
