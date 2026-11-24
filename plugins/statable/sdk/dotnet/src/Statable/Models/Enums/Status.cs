using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Trialing = new("trialing");

    public static readonly Status Active = new("active");

    public static readonly Status PastDue = new("past_due");

    public static readonly Status Expired = new("expired");

    public static readonly Status TrialExpired = new("trial_expired");

    public static readonly Status None = new("none");

    public TResult Match<TResult>(Func<TResult> onTrialing,
        Func<TResult> onActive,
        Func<TResult> onPastDue,
        Func<TResult> onExpired,
        Func<TResult> onTrialExpired,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Trialing => onTrialing(),
            _ when this == Active => onActive(),
            _ when this == PastDue => onPastDue(),
            _ when this == Expired => onExpired(),
            _ when this == TrialExpired => onTrialExpired(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrialing,
        Action onActive,
        Action onPastDue,
        Action onExpired,
        Action onTrialExpired,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == Trialing) onTrialing();
        else if (this == Active) onActive();
        else if (this == PastDue) onPastDue();
        else if (this == Expired) onExpired();
        else if (this == TrialExpired) onTrialExpired();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
