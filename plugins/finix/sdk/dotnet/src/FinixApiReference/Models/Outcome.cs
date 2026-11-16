using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record Outcome
{
    /// <summary>
    /// A code indicating the reason the verification request failed. Finix reserves the right to return enums that are not listed here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outcome_code")]
    public OutcomeCode? OutcomeCode { get; init; }

    /// <summary>
    /// An optional message from the Finix underwriting team providing additional context about the outcome code. Only visible to Applications, not submerchants.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outcome_message")]
    public string? OutcomeMessage { get; init; }

    /// <summary>
    /// Details about the action required to remediate the verification failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remediation_details")]
    public RemediationDetails? RemediationDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
