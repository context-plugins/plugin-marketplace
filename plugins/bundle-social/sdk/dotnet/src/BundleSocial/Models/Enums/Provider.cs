using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Provider>))]
public sealed record Provider : OpenStringEnum<Provider>
{
    private Provider(string value) : base(value)
    {
    }

    public static readonly Provider Giphy = new("GIPHY");

    public TResult Match<TResult>(Func<TResult> onGiphy, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Giphy => onGiphy(),
            _ => otherwise(Value)
        };

    public void Match(Action onGiphy, Action<string> otherwise)
    {
        if (this == Giphy) onGiphy();
        else otherwise(Value);
    }
}
