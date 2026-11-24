using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Type of question result
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Aioverview = new("AIOVERVIEW");

    public static readonly TypeEnum Link = new("LINK");

    public static readonly TypeEnum Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onAioverview,
        Func<TResult> onLink,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aioverview => onAioverview(),
            _ when this == Link => onLink(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onAioverview, Action onLink, Action onUnknown, Action<string> otherwise)
    {
        if (this == Aioverview) onAioverview();
        else if (this == Link) onLink();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
