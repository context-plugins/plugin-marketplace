using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PrivacyStatus>))]
public sealed record PrivacyStatus : OpenStringEnum<PrivacyStatus>
{
    private PrivacyStatus(string value) : base(value)
    {
    }

    public static readonly PrivacyStatus Public = new("public");

    public static readonly PrivacyStatus Unlisted = new("unlisted");

    public static readonly PrivacyStatus Private = new("private");

    public TResult Match<TResult>(Func<TResult> onPublic,
        Func<TResult> onUnlisted,
        Func<TResult> onPrivate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == Unlisted => onUnlisted(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic, Action onUnlisted, Action onPrivate, Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == Unlisted) onUnlisted();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
