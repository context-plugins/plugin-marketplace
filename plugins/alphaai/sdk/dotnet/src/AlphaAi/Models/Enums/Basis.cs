using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Basis>))]
public sealed record Basis : OpenStringEnum<Basis>
{
    private Basis(string value) : base(value)
    {
    }

    public static readonly Basis Gaap = new("GAAP");

    public static readonly Basis NonGaap = new("non-GAAP");

    public static readonly Basis Other = new("other");

    public TResult Match<TResult>(Func<TResult> onGaap,
        Func<TResult> onNonGaap,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gaap => onGaap(),
            _ when this == NonGaap => onNonGaap(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onGaap, Action onNonGaap, Action onOther, Action<string> otherwise)
    {
        if (this == Gaap) onGaap();
        else if (this == NonGaap) onNonGaap();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
