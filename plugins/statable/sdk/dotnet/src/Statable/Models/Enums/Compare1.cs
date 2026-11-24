using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Compare1>))]
public sealed record Compare1 : OpenStringEnum<Compare1>
{
    private Compare1(string value) : base(value)
    {
    }

    public static readonly Compare1 PreviousPeriod = new("previous_period");

    public TResult Match<TResult>(Func<TResult> onPreviousPeriod, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PreviousPeriod => onPreviousPeriod(),
            _ => otherwise(Value)
        };

    public void Match(Action onPreviousPeriod, Action<string> otherwise)
    {
        if (this == PreviousPeriod) onPreviousPeriod();
        else otherwise(Value);
    }
}
