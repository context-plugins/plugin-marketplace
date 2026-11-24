using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of address object present.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AddressType>))]
public sealed record AddressType : OpenStringEnum<AddressType>
{
    private AddressType(string value) : base(value)
    {
    }

    public static readonly AddressType Paf = new("paf");

    public static readonly AddressType Simple = new("simple");

    public TResult Match<TResult>(Func<TResult> onPaf, Func<TResult> onSimple, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Paf => onPaf(),
            _ when this == Simple => onSimple(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaf, Action onSimple, Action<string> otherwise)
    {
        if (this == Paf) onPaf();
        else if (this == Simple) onSimple();
        else otherwise(Value);
    }
}
