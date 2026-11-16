using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Recurring = new("RECURRING");

    public static readonly Type2 Unscheduled = new("UNSCHEDULED");

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
