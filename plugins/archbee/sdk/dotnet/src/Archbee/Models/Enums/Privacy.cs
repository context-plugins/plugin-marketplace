using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// describes how to access the document via public url (if published)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Privacy>))]
public sealed record Privacy : OpenStringEnum<Privacy>
{
    private Privacy(string value) : base(value)
    {
    }

    public static readonly Privacy Private = new("private");

    public static readonly Privacy SharedWithTeam = new("shared with team");

    public static readonly Privacy PublicViaLink = new("public-via-link");

    public static readonly Privacy Public = new("public");

    public TResult Match<TResult>(Func<TResult> onPrivate,
        Func<TResult> onSharedWithTeam,
        Func<TResult> onPublicViaLink,
        Func<TResult> onPublic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Private => onPrivate(),
            _ when this == SharedWithTeam => onSharedWithTeam(),
            _ when this == PublicViaLink => onPublicViaLink(),
            _ when this == Public => onPublic(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrivate,
        Action onSharedWithTeam,
        Action onPublicViaLink,
        Action onPublic,
        Action<string> otherwise)
    {
        if (this == Private) onPrivate();
        else if (this == SharedWithTeam) onSharedWithTeam();
        else if (this == PublicViaLink) onPublicViaLink();
        else if (this == Public) onPublic();
        else otherwise(Value);
    }
}
