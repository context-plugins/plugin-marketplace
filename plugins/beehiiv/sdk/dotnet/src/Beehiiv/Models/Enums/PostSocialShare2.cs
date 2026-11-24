using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The social share type to use for this post.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostSocialShare2>))]
public sealed record PostSocialShare2 : OpenStringEnum<PostSocialShare2>
{
    private PostSocialShare2(string value) : base(value)
    {
    }

    public static readonly PostSocialShare2 CommentsAndLikesOnly = new("comments_and_likes_only");

    public static readonly PostSocialShare2 WithCommentsAndLikes = new("with_comments_and_likes");

    public static readonly PostSocialShare2 Top = new("top");

    public static readonly PostSocialShare2 None = new("none");

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
