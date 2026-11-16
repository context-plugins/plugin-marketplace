using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the <c>Subscription</c>.
/// <list type="bullet">
///   <item><description>The <c>NOT_STARTED</c> state occurs when the subscription has not yet started, typically indicated by a <c>start_subscription_at</c> timestamp set during creation.</description></item>
///   <item><description>A subscription in the <c>PAST_DUE</c> state is unpaid but has not yet been canceled.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State18>))]
public sealed record State18 : OpenStringEnum<State18>
{
    private State18(string value) : base(value)
    {
    }

    public static readonly State18 Active = new("ACTIVE");

    public static readonly State18 Canceled = new("CANCELED");

    public static readonly State18 Expired = new("EXPIRED");

    public static readonly State18 NotStarted = new("NOT_STARTED");

    public static readonly State18 PastDue = new("PAST_DUE");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onCanceled,
        Func<TResult> onExpired,
        Func<TResult> onNotStarted,
        Func<TResult> onPastDue,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Canceled => onCanceled(),
            _ when this == Expired => onExpired(),
            _ when this == NotStarted => onNotStarted(),
            _ when this == PastDue => onPastDue(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive,
        Action onCanceled,
        Action onExpired,
        Action onNotStarted,
        Action onPastDue,
        Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Canceled) onCanceled();
        else if (this == Expired) onExpired();
        else if (this == NotStarted) onNotStarted();
        else if (this == PastDue) onPastDue();
        else otherwise(Value);
    }
}
