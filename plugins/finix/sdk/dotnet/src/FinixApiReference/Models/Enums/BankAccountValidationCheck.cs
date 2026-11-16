using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Possible values returned when <c>attempt_bank_account_validation_check</c> is <c>true</c> or the <c>Payment Instrument</c> is used for a <c>Transfer</c>:
/// <list type="bullet">
///   <item><description><c>INCONCLUSIVE</c>: A verification check was conducted, but the bank account could not be found or verified with the issuing bank. Please contact the buyer to confirm the details collected or request an alternate method of payment.</description></item>
///   <item><description><c>INVALID</c>: The Payment Instrument was involved in transactions that returned one or more of the following ACH errors:
///     <list type="bullet">
///       <item><description>Account Does Not Allow ACH Transactions</description></item>
///       <item><description>Account is Closed</description></item>
///       <item><description>Account Funds are Frozen</description></item>
///       <item><description>Deceased Account Holder</description></item>
///       <item><description>Invalid Account Number</description></item>
///       <item><description>Invalid Routing Number</description></item>
///       <item><description>No Account on File</description></item>
///     </list>
///   </description></item>
/// </list>
/// <para>
///     For further details about the different ACH failure codes, please refer to ACH Direct Debit documentation.
/// </para>
/// <list type="bullet">
///   <item><description><c>NOT_ATTEMPTED</c>: A verification check was not performed, and the Payment Instrument has not been used to create a Transfer or Authorization.</description></item>
///   <item><description><c>VALID</c>: The bank account was successfully verified. The Payment Instrument is eligible for use in creating ACH Direct Debits.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BankAccountValidationCheck>))]
public sealed record BankAccountValidationCheck : OpenStringEnum<BankAccountValidationCheck>
{
    private BankAccountValidationCheck(string value) : base(value)
    {
    }

    public static readonly BankAccountValidationCheck Inconclusive = new("INCONCLUSIVE");

    public static readonly BankAccountValidationCheck Invalid = new("INVALID");

    public static readonly BankAccountValidationCheck NotAttempted = new("NOT_ATTEMPTED");

    public static readonly BankAccountValidationCheck Valid = new("VALID");

    public TResult Match<TResult>(Func<TResult> onInconclusive,
        Func<TResult> onInvalid,
        Func<TResult> onNotAttempted,
        Func<TResult> onValid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inconclusive => onInconclusive(),
            _ when this == Invalid => onInvalid(),
            _ when this == NotAttempted => onNotAttempted(),
            _ when this == Valid => onValid(),
            _ => otherwise(Value)
        };

    public void Match(Action onInconclusive,
        Action onInvalid,
        Action onNotAttempted,
        Action onValid,
        Action<string> otherwise)
    {
        if (this == Inconclusive) onInconclusive();
        else if (this == Invalid) onInvalid();
        else if (this == NotAttempted) onNotAttempted();
        else if (this == Valid) onValid();
        else otherwise(Value);
    }
}
