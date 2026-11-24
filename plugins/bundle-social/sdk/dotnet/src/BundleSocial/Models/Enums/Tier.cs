using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Tier>))]
public sealed record Tier : OpenStringEnum<Tier>
{
    private Tier(string value) : base(value)
    {
    }

    public static readonly Tier Pro = new("PRO");

    public static readonly Tier Business = new("BUSINESS");

    public TResult Match<TResult>(Func<TResult> onPro, Func<TResult> onBusiness, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pro => onPro(),
            _ when this == Business => onBusiness(),
            _ => otherwise(Value)
        };

    public void Match(Action onPro, Action onBusiness, Action<string> otherwise)
    {
        if (this == Pro) onPro();
        else if (this == Business) onBusiness();
        else otherwise(Value);
    }
}
