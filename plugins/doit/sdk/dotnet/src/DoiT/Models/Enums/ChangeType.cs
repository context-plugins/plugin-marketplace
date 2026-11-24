using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ChangeType>))]
public sealed record ChangeType : OpenStringEnum<ChangeType>
{
    private ChangeType(string value) : base(value)
    {
    }

    public static readonly ChangeType Percentage = new("percentage");

    public static readonly ChangeType Absolute = new("absolute");

    public TResult Match<TResult>(Func<TResult> onPercentage,
        Func<TResult> onAbsolute,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Percentage => onPercentage(),
            _ when this == Absolute => onAbsolute(),
            _ => otherwise(Value)
        };

    public void Match(Action onPercentage, Action onAbsolute, Action<string> otherwise)
    {
        if (this == Percentage) onPercentage();
        else if (this == Absolute) onAbsolute();
        else otherwise(Value);
    }
}
