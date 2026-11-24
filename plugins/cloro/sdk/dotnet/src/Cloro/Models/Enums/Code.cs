using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code InsufficientCredits = new("INSUFFICIENT_CREDITS");

    public TResult Match<TResult>(Func<TResult> onInsufficientCredits, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InsufficientCredits => onInsufficientCredits(),
            _ => otherwise(Value)
        };

    public void Match(Action onInsufficientCredits, Action<string> otherwise)
    {
        if (this == InsufficientCredits) onInsufficientCredits();
        else otherwise(Value);
    }
}
