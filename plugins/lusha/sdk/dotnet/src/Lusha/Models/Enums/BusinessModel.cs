using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BusinessModel>))]
public sealed record BusinessModel : OpenStringEnum<BusinessModel>
{
    private BusinessModel(string value) : base(value)
    {
    }

    public static readonly BusinessModel B2B = new("B2B");

    public static readonly BusinessModel B2C = new("B2C");

    public static readonly BusinessModel B2G = new("B2G");

    public TResult Match<TResult>(Func<TResult> onB2B,
        Func<TResult> onB2C,
        Func<TResult> onB2G,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == B2B => onB2B(),
            _ when this == B2C => onB2C(),
            _ when this == B2G => onB2G(),
            _ => otherwise(Value)
        };

    public void Match(Action onB2B, Action onB2C, Action onB2G, Action<string> otherwise)
    {
        if (this == B2B) onB2B();
        else if (this == B2C) onB2C();
        else if (this == B2G) onB2G();
        else otherwise(Value);
    }
}
