using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the <c>Subscription Plan</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State19>))]
public sealed record State19 : OpenStringEnum<State19>
{
    private State19(string value) : base(value)
    {
    }

    public static readonly State19 Active = new("ACTIVE");

    public static readonly State19 Inactive = new("INACTIVE");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onInactive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onInactive, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else otherwise(Value);
    }
}
