using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

/// <summary>
/// The updated privacy status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PrivacyStatus2>))]
public sealed record PrivacyStatus2 : OpenStringEnum<PrivacyStatus2>
{
    private PrivacyStatus2(string value) : base(value)
    {
    }

    public static readonly PrivacyStatus2 Public = new("public");

    public static readonly PrivacyStatus2 Unlisted = new("unlisted");

    public static readonly PrivacyStatus2 Private = new("private");

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
