using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Origin>))]
public sealed record Origin : OpenStringEnum<Origin>
{
    private Origin(string value) : base(value)
    {
    }

    public static readonly Origin Platform = new("platform");

    public static readonly Origin Bundle = new("bundle");

    public TResult Match<TResult>(Func<TResult> onPlatform, Func<TResult> onBundle, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Platform => onPlatform(),
            _ when this == Bundle => onBundle(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlatform, Action onBundle, Action<string> otherwise)
    {
        if (this == Platform) onPlatform();
        else if (this == Bundle) onBundle();
        else otherwise(Value);
    }
}
