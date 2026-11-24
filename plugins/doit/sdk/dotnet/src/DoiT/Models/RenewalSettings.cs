using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Settings that control subscription renewal behavior at the end of a commitment term.
/// </summary>
public record RenewalSettings
{
    /// <summary>
    /// The type of renewal, e.g. AUTO_RENEW_MONTHLY_PAY, AUTO_RENEW_YEARLY_PAY, RENEW_CURRENT_USERS_MONTHLY_PAY, RENEW_CURRENT_USERS_YEARLY_PAY, SWITCH_TO_PAY_AS_YOU_GO, or CANCEL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("renewalType")]
    public string? RenewalType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
