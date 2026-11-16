using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Indicates that this transaction uses stored payment credentials (credential-on-file), meaning the cardholder previously authorized the merchant to save and reuse their payment details.
/// </summary>
public record CredentialOnFile3
{
    /// <summary>
    /// The type of credential on file transfer. Must be one of the following values:
    /// - <c>RECURRING</c>: A transfer that is part of a series of transfers scheduled at regular intervals. Interchange benefits for <c>RECURRING</c> transactions are available only to approved bill payment merchants in the telecommunications and cable industries (MCC 4814 and 4899).
    /// - <c>UNSCHEDULED</c>: A merchant-initiated, one-time transaction using stored credentials, triggered when specific conditions in a cardholder agreement are met—not on a fixed schedule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type33? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
