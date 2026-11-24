using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The author type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthorType2>))]
public sealed record AuthorType2 : OpenStringEnum<AuthorType2>
{
    private AuthorType2(string value) : base(value)
    {
    }

    public static readonly AuthorType2 User = new("user");

    public static readonly AuthorType2 GuestAuthor = new("guest_author");

    public TResult Match<TResult>(Func<TResult> onUser, Func<TResult> onGuestAuthor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == GuestAuthor => onGuestAuthor(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onGuestAuthor, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == GuestAuthor) onGuestAuthor();
        else otherwise(Value);
    }
}
