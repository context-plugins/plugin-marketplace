using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Models;

/// <summary>
/// Verify a bank account
/// </summary>
public record BankAccountVerifyRequestDto
{
    /// <summary>
    /// Verify deposit amount.
    /// <para>
    /// Enter an amount between <c>0.01</c> and <c>0.99</c>. In the sandbox environment, set this field as <c>0.50</c> to complete bank account verification.
    /// </para>
    /// </summary>
    [JsonPropertyName("depositAmount")]
    [Minimum(0.01)]
    [Maximum(0.99)]
    public required double DepositAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
