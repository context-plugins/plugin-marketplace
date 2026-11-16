using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Approved = new("APPROVED");

    public static readonly Status3 AwaitingApproval = new("AWAITING_APPROVAL");

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
