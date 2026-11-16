using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentVerifyMicrodeposits
{
    /// <summary>
    /// The verification code from the $0.01 microdeposit's bank statement descriptor. Matching is case-insensitive, and the <c>FNX</c> prefix is optional.
    /// </summary>
    [JsonPropertyName("verification_code")]
    public required string VerificationCode { get; init; }

    /// <summary>
    /// Set to <c>true</c> to submit the request as a microdeposit verification. For more information, see <see href="/guides/online-payments/bank-payments/microdeposit-verification">Microdeposit Verification</see>.
    /// </summary>
    [JsonPropertyName("verify_microdeposits")]
    public required bool VerifyMicrodeposits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
