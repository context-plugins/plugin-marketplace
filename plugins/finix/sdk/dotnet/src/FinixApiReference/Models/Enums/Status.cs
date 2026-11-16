using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The status of the <c>Settlement</c>. Merchants only receive payouts when <c>Settlements</c> are <c>APPROVED</c>. For more information, see <see href="/guides/payouts/">Payouts</see>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Approved = new("APPROVED");

    public static readonly Status AwaitingApproval = new("AWAITING_APPROVAL");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onAwaitingApproval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == AwaitingApproval => onAwaitingApproval(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved, Action onAwaitingApproval, Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == AwaitingApproval) onAwaitingApproval();
        else otherwise(Value);
    }
}
