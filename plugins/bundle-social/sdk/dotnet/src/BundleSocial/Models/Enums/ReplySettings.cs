using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReplySettings>))]
public sealed record ReplySettings : OpenStringEnum<ReplySettings>
{
    private ReplySettings(string value) : base(value)
    {
    }

    public static readonly ReplySettings Everyone = new("EVERYONE");

    public static readonly ReplySettings Following = new("FOLLOWING");

    public static readonly ReplySettings MentionedUsers = new("MENTIONED_USERS");

    public static readonly ReplySettings Subscribers = new("SUBSCRIBERS");

    public static readonly ReplySettings Verified = new("VERIFIED");

    public TResult Match<TResult>(Func<TResult> onEveryone,
        Func<TResult> onFollowing,
        Func<TResult> onMentionedUsers,
        Func<TResult> onSubscribers,
        Func<TResult> onVerified,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Everyone => onEveryone(),
            _ when this == Following => onFollowing(),
            _ when this == MentionedUsers => onMentionedUsers(),
            _ when this == Subscribers => onSubscribers(),
            _ when this == Verified => onVerified(),
            _ => otherwise(Value)
        };

    public void Match(Action onEveryone,
        Action onFollowing,
        Action onMentionedUsers,
        Action onSubscribers,
        Action onVerified,
        Action<string> otherwise)
    {
        if (this == Everyone) onEveryone();
        else if (this == Following) onFollowing();
        else if (this == MentionedUsers) onMentionedUsers();
        else if (this == Subscribers) onSubscribers();
        else if (this == Verified) onVerified();
        else otherwise(Value);
    }
}
