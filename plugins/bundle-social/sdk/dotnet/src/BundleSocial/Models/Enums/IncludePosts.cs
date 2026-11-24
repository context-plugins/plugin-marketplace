using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IncludePosts>))]
public sealed record IncludePosts : OpenStringEnum<IncludePosts>
{
    private IncludePosts(string value) : base(value)
    {
    }

    public static readonly IncludePosts True = new("true");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else otherwise(Value);
    }
}
