using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IncludePosts1>))]
public sealed record IncludePosts1 : OpenStringEnum<IncludePosts1>
{
    private IncludePosts1(string value) : base(value)
    {
    }

    public static readonly IncludePosts1 False = new("false");

    public TResult Match<TResult>(Func<TResult> onFalse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onFalse, Action<string> otherwise)
    {
        if (this == False) onFalse();
        else otherwise(Value);
    }
}
