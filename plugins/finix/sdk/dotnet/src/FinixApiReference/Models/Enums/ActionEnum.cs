using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Specify the action to be performed on the <c>Settlement Queue Entry</c> resources. Use the <c>RELEASE</c> action to release a list of <c>Transfer</c>, <c>Fee</c>, or <c>Reversal</c> resources, placing them into a <c>Settlement</c> as corresponding <c>Settlement Entry</c> resources.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Release = new("RELEASE");

    public TResult Match<TResult>(Func<TResult> onRelease, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Release => onRelease(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelease, Action<string> otherwise)
    {
        if (this == Release) onRelease();
        else otherwise(Value);
    }
}
