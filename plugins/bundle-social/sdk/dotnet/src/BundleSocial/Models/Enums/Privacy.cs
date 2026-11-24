using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Privacy>))]
public sealed record Privacy : OpenStringEnum<Privacy>
{
    private Privacy(string value) : base(value)
    {
    }

    public static readonly Privacy SelfOnly = new("SELF_ONLY");

    public static readonly Privacy PublicToEveryone = new("PUBLIC_TO_EVERYONE");

    public static readonly Privacy MutualFollowFriends = new("MUTUAL_FOLLOW_FRIENDS");

    public static readonly Privacy FollowerOfCreator = new("FOLLOWER_OF_CREATOR");

    public TResult Match<TResult>(Func<TResult> onSelfOnly,
        Func<TResult> onPublicToEveryone,
        Func<TResult> onMutualFollowFriends,
        Func<TResult> onFollowerOfCreator,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SelfOnly => onSelfOnly(),
            _ when this == PublicToEveryone => onPublicToEveryone(),
            _ when this == MutualFollowFriends => onMutualFollowFriends(),
            _ when this == FollowerOfCreator => onFollowerOfCreator(),
            _ => otherwise(Value)
        };

    public void Match(Action onSelfOnly,
        Action onPublicToEveryone,
        Action onMutualFollowFriends,
        Action onFollowerOfCreator,
        Action<string> otherwise)
    {
        if (this == SelfOnly) onSelfOnly();
        else if (this == PublicToEveryone) onPublicToEveryone();
        else if (this == MutualFollowFriends) onMutualFollowFriends();
        else if (this == FollowerOfCreator) onFollowerOfCreator();
        else otherwise(Value);
    }
}
