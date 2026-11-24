using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Auction>))]
public sealed record Auction : OpenStringEnum<Auction>
{
    private Auction(string value) : base(value)
    {
    }

    public static readonly Auction Copart = new("copart");

    public static readonly Auction Iaai = new("iaai");

    public TResult Match<TResult>(Func<TResult> onCopart, Func<TResult> onIaai, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Copart => onCopart(),
            _ when this == Iaai => onIaai(),
            _ => otherwise(Value)
        };

    public void Match(Action onCopart, Action onIaai, Action<string> otherwise)
    {
        if (this == Copart) onCopart();
        else if (this == Iaai) onIaai();
        else otherwise(Value);
    }
}
