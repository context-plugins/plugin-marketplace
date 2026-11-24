using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Privacy2>))]
public sealed record Privacy2 : OpenStringEnum<Privacy2>
{
    private Privacy2(string value) : base(value)
    {
    }

    public static readonly Privacy2 Private = new("PRIVATE");

    public static readonly Privacy2 Public = new("PUBLIC");

    public static readonly Privacy2 Unlisted = new("UNLISTED");

    public TResult Match<TResult>(Func<TResult> onPrivate,
        Func<TResult> onPublic,
        Func<TResult> onUnlisted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Private => onPrivate(),
            _ when this == Public => onPublic(),
            _ when this == Unlisted => onUnlisted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrivate, Action onPublic, Action onUnlisted, Action<string> otherwise)
    {
        if (this == Private) onPrivate();
        else if (this == Public) onPublic();
        else if (this == Unlisted) onUnlisted();
        else otherwise(Value);
    }
}
