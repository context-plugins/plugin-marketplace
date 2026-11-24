using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort Clicks = new("clicks");

    public TResult Match<TResult>(Func<TResult> onClicks, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Clicks => onClicks(),
            _ => otherwise(Value)
        };

    public void Match(Action onClicks, Action<string> otherwise)
    {
        if (this == Clicks) onClicks();
        else otherwise(Value);
    }
}
