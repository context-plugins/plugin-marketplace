using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type112>))]
public sealed record Type112 : OpenStringEnum<Type112>
{
    private Type112(string value) : base(value)
    {
    }

    public static readonly Type112 FacebookPersistentMenu = new("FACEBOOK_PERSISTENT_MENU");

    public static readonly Type112 InstagramIceBreakers = new("INSTAGRAM_ICE_BREAKERS");

    public TResult Match<TResult>(Func<TResult> onFacebookPersistentMenu,
        Func<TResult> onInstagramIceBreakers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FacebookPersistentMenu => onFacebookPersistentMenu(),
            _ when this == InstagramIceBreakers => onInstagramIceBreakers(),
            _ => otherwise(Value)
        };

    public void Match(Action onFacebookPersistentMenu, Action onInstagramIceBreakers, Action<string> otherwise)
    {
        if (this == FacebookPersistentMenu) onFacebookPersistentMenu();
        else if (this == InstagramIceBreakers) onInstagramIceBreakers();
        else otherwise(Value);
    }
}
