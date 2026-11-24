using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Guardrail fields on a message (max sends, eligibility dates, etc.)
/// </summary>
public record DecisionEngineMessageGuardrails
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxSendsPerUser")]
    public double? MaxSendsPerUser { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxSendsPerUserWindowDays")]
    public double? MaxSendsPerUserWindowDays { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minOtherMessagesInBetween")]
    public double? MinOtherMessagesInBetween { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstEligibleSendDate")]
    public string? FirstEligibleSendDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastEligibleSendDate")]
    public string? LastEligibleSendDate { get; init; }
}
