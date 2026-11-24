using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source National = new("national");

    public static readonly Source Eu = new("eu");

    public TResult Match<TResult>(Func<TResult> onNational, Func<TResult> onEu, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == National => onNational(),
            _ when this == Eu => onEu(),
            _ => otherwise(Value)
        };

    public void Match(Action onNational, Action onEu, Action<string> otherwise)
    {
        if (this == National) onNational();
        else if (this == Eu) onEu();
        else otherwise(Value);
    }
}
