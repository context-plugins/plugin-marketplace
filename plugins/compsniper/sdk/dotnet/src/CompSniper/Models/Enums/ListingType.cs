using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ListingType>))]
public sealed record ListingType : OpenStringEnum<ListingType>
{
    private ListingType(string value) : base(value)
    {
    }

    public static readonly ListingType Active = new("active");

    public TResult Match<TResult>(Func<TResult> onActive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else otherwise(Value);
    }
}
