using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SalesHistory>))]
public sealed record SalesHistory : OpenStringEnum<SalesHistory>
{
    private SalesHistory(string value) : base(value)
    {
    }

    public static readonly SalesHistory Full = new("full");

    public static readonly SalesHistory Limited = new("limited");

    public TResult Match<TResult>(Func<TResult> onFull, Func<TResult> onLimited, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Full => onFull(),
            _ when this == Limited => onLimited(),
            _ => otherwise(Value)
        };

    public void Match(Action onFull, Action onLimited, Action<string> otherwise)
    {
        if (this == Full) onFull();
        else if (this == Limited) onLimited();
        else otherwise(Value);
    }
}
