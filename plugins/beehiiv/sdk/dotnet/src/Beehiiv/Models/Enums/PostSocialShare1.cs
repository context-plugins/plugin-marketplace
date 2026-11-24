using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The social share type to use for this post. If not provided, the default value will be used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostSocialShare1>))]
public sealed record PostSocialShare1 : OpenStringEnum<PostSocialShare1>
{
    private PostSocialShare1(string value) : base(value)
    {
    }

    public static readonly PostSocialShare1 CommentsAndLikesOnly = new("comments_and_likes_only");

    public static readonly PostSocialShare1 WithCommentsAndLikes = new("with_comments_and_likes");

    public static readonly PostSocialShare1 Top = new("top");

    public static readonly PostSocialShare1 None = new("none");

    public TResult Match<TResult>(Func<TResult> onCommentsAndLikesOnly,
        Func<TResult> onWithCommentsAndLikes,
        Func<TResult> onTop,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CommentsAndLikesOnly => onCommentsAndLikesOnly(),
            _ when this == WithCommentsAndLikes => onWithCommentsAndLikes(),
            _ when this == Top => onTop(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onCommentsAndLikesOnly,
        Action onWithCommentsAndLikes,
        Action onTop,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == CommentsAndLikesOnly) onCommentsAndLikesOnly();
        else if (this == WithCommentsAndLikes) onWithCommentsAndLikes();
        else if (this == Top) onTop();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
