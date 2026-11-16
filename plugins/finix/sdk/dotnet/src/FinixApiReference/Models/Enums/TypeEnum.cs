using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of credential on file authorization.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Recurring = new("RECURRING");

    public static readonly TypeEnum Unscheduled = new("UNSCHEDULED");

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
