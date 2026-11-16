using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The reason the <c>Transfer Attempt</c> is in a <c>PENDING</c> state. Returns <c>null</c> when not applicable.
/// <list type="bullet">
///   <item><description><c>MICRODEPOSIT_VERIFICATION_REQUIRED</c>: The Bank account is pending microdeposit verification.</description></item>
///   <item><description><c>TRANSFER_PENDING</c>: The underlying transfer is currently in a state of Pending.</description></item>
///   <item><description><c>RECIPIENT_VERIFICATION_REQUIRED</c>: The recipient for the transfer is being verified.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransferAttemptPendingCode>))]
public sealed record TransferAttemptPendingCode : OpenStringEnum<TransferAttemptPendingCode>
{
    private TransferAttemptPendingCode(string value) : base(value)
    {
    }

    public static readonly TransferAttemptPendingCode MicrodepositVerificationRequired = new(
        "MICRODEPOSIT_VERIFICATION_REQUIRED");

    public static readonly TransferAttemptPendingCode TransferPending = new("TRANSFER_PENDING");

    public static readonly TransferAttemptPendingCode RecipientVerificationRequired = new(
        "RECIPIENT_VERIFICATION_REQUIRED");

    public TResult Match<TResult>(Func<TResult> onMicrodepositVerificationRequired,
        Func<TResult> onTransferPending,
        Func<TResult> onRecipientVerificationRequired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MicrodepositVerificationRequired => onMicrodepositVerificationRequired(),
            _ when this == TransferPending => onTransferPending(),
            _ when this == RecipientVerificationRequired => onRecipientVerificationRequired(),
            _ => otherwise(Value)
        };

    public void Match(Action onMicrodepositVerificationRequired,
        Action onTransferPending,
        Action onRecipientVerificationRequired,
        Action<string> otherwise)
    {
        if (this == MicrodepositVerificationRequired) onMicrodepositVerificationRequired();
        else if (this == TransferPending) onTransferPending();
        else if (this == RecipientVerificationRequired) onRecipientVerificationRequired();
        else otherwise(Value);
    }
}
