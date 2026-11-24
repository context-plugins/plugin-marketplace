using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// true = sold listings (default), false = active listings
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sold>))]
public sealed record Sold : OpenStringEnum<Sold>
{
    private Sold(string value) : base(value)
    {
    }

    public static readonly Sold True = new("true");

    public static readonly Sold False = new("false");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<TResult> onFalse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action onFalse, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
