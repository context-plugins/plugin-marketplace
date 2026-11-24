using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Privacy3>))]
public sealed record Privacy3 : OpenStringEnum<Privacy3>
{
    private Privacy3(string value) : base(value)
    {
    }

    public static readonly Privacy3 Public = new("PUBLIC");

    public static readonly Privacy3 Unlisted = new("UNLISTED");

    public static readonly Privacy3 Private = new("PRIVATE");

    public static readonly Privacy3 Direct = new("DIRECT");

    public TResult Match<TResult>(Func<TResult> onPublic,
        Func<TResult> onUnlisted,
        Func<TResult> onPrivate,
        Func<TResult> onDirect,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == Unlisted => onUnlisted(),
            _ when this == Private => onPrivate(),
            _ when this == Direct => onDirect(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic, Action onUnlisted, Action onPrivate, Action onDirect, Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == Unlisted) onUnlisted();
        else if (this == Private) onPrivate();
        else if (this == Direct) onDirect();
        else otherwise(Value);
    }
}
