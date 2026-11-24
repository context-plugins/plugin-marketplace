using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type5BundleSocialPostApi>))]
public sealed record Type5BundleSocialPostApi : OpenStringEnum<Type5BundleSocialPostApi>
{
    private Type5BundleSocialPostApi(string value) : base(value)
    {
    }

    public static readonly Type5BundleSocialPostApi Video = new("VIDEO");

    public static readonly Type5BundleSocialPostApi Short = new("SHORT");

    public TResult Match<TResult>(Func<TResult> onVideo, Func<TResult> onShort, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Video => onVideo(),
            _ when this == Short => onShort(),
            _ => otherwise(Value)
        };

    public void Match(Action onVideo, Action onShort, Action<string> otherwise)
    {
        if (this == Video) onVideo();
        else if (this == Short) onShort();
        else otherwise(Value);
    }
}
