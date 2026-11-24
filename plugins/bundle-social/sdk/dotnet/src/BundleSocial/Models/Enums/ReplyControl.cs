using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReplyControl>))]
public sealed record ReplyControl : OpenStringEnum<ReplyControl>
{
    private ReplyControl(string value) : base(value)
    {
    }

    public static readonly ReplyControl Everyone = new("everyone");

    public static readonly ReplyControl AccountsYouFollow = new("accounts_you_follow");

    public static readonly ReplyControl MentionedOnly = new("mentioned_only");

    public static readonly ReplyControl ParentPostAuthorOnly = new("parent_post_author_only");

    public static readonly ReplyControl FollowersOnly = new("followers_only");

    public TResult Match<TResult>(Func<TResult> onEveryone,
        Func<TResult> onAccountsYouFollow,
        Func<TResult> onMentionedOnly,
        Func<TResult> onParentPostAuthorOnly,
        Func<TResult> onFollowersOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Everyone => onEveryone(),
            _ when this == AccountsYouFollow => onAccountsYouFollow(),
            _ when this == MentionedOnly => onMentionedOnly(),
            _ when this == ParentPostAuthorOnly => onParentPostAuthorOnly(),
            _ when this == FollowersOnly => onFollowersOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onEveryone,
        Action onAccountsYouFollow,
        Action onMentionedOnly,
        Action onParentPostAuthorOnly,
        Action onFollowersOnly,
        Action<string> otherwise)
    {
        if (this == Everyone) onEveryone();
        else if (this == AccountsYouFollow) onAccountsYouFollow();
        else if (this == MentionedOnly) onMentionedOnly();
        else if (this == ParentPostAuthorOnly) onParentPostAuthorOnly();
        else if (this == FollowersOnly) onFollowersOnly();
        else otherwise(Value);
    }
}
