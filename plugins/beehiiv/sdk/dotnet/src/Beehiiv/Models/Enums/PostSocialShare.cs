using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PostSocialShare>))]
public sealed record PostSocialShare : OpenStringEnum<PostSocialShare>
{
    private PostSocialShare(string value) : base(value)
    {
    }

    public static readonly PostSocialShare CommentsAndLikesOnly = new("comments_and_likes_only");

    public static readonly PostSocialShare WithCommentsAndLikes = new("with_comments_and_likes");

    public static readonly PostSocialShare Top = new("top");

    public static readonly PostSocialShare None = new("none");

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
