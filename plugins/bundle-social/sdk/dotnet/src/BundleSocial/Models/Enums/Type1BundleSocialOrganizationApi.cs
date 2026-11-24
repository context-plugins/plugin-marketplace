using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1BundleSocialOrganizationApi>))]
public sealed record Type1BundleSocialOrganizationApi : OpenStringEnum<Type1BundleSocialOrganizationApi>
{
    private Type1BundleSocialOrganizationApi(string value) : base(value)
    {
    }

    public static readonly Type1BundleSocialOrganizationApi Instagram = new("INSTAGRAM");

    public static readonly Type1BundleSocialOrganizationApi Facebook = new("FACEBOOK");

    public static readonly Type1BundleSocialOrganizationApi Tiktok = new("TIKTOK");

    public TResult Match<TResult>(Func<TResult> onInstagram,
        Func<TResult> onFacebook,
        Func<TResult> onTiktok,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Instagram => onInstagram(),
            _ when this == Facebook => onFacebook(),
            _ when this == Tiktok => onTiktok(),
            _ => otherwise(Value)
        };

    public void Match(Action onInstagram, Action onFacebook, Action onTiktok, Action<string> otherwise)
    {
        if (this == Instagram) onInstagram();
        else if (this == Facebook) onFacebook();
        else if (this == Tiktok) onTiktok();
        else otherwise(Value);
    }
}
