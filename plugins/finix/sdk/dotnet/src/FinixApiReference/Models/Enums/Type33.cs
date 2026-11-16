using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of credential on file transfer. Must be one of the following values:
/// - <c>RECURRING</c>: A transfer that is part of a series of transfers scheduled at regular intervals. Interchange benefits for <c>RECURRING</c> transactions are available only to approved bill payment merchants in the telecommunications and cable industries (MCC 4814 and 4899).
/// - <c>UNSCHEDULED</c>: A merchant-initiated, one-time transaction using stored credentials, triggered when specific conditions in a cardholder agreement are met—not on a fixed schedule.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type33>))]
public sealed record Type33 : OpenStringEnum<Type33>
{
    private Type33(string value) : base(value)
    {
    }

    public static readonly Type33 Recurring = new("RECURRING");

    public static readonly Type33 Unscheduled = new("UNSCHEDULED");

    public TResult Match<TResult>(Func<TResult> onRecurring,
        Func<TResult> onUnscheduled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Recurring => onRecurring(),
            _ when this == Unscheduled => onUnscheduled(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecurring, Action onUnscheduled, Action<string> otherwise)
    {
        if (this == Recurring) onRecurring();
        else if (this == Unscheduled) onUnscheduled();
        else otherwise(Value);
    }
}
