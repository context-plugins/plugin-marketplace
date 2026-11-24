using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeBundleSocialMiscApi>))]
public sealed record TypeBundleSocialMiscApi : OpenStringEnum<TypeBundleSocialMiscApi>
{
    private TypeBundleSocialMiscApi(string value) : base(value)
    {
    }

    public static readonly TypeBundleSocialMiscApi User = new("USER");

    public static readonly TypeBundleSocialMiscApi Page = new("PAGE");

    public TResult Match<TResult>(Func<TResult> onUser, Func<TResult> onPage, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Page => onPage(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onPage, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Page) onPage();
        else otherwise(Value);
    }
}
