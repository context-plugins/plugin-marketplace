using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActionBundleSocialCommentApi>))]
public sealed record ActionBundleSocialCommentApi : OpenStringEnum<ActionBundleSocialCommentApi>
{
    private ActionBundleSocialCommentApi(string value) : base(value)
    {
    }

    public static readonly ActionBundleSocialCommentApi Delete = new("DELETE");

    public static readonly ActionBundleSocialCommentApi Hide = new("HIDE");

    public static readonly ActionBundleSocialCommentApi Unhide = new("UNHIDE");

    public static readonly ActionBundleSocialCommentApi Like = new("LIKE");

    public static readonly ActionBundleSocialCommentApi Unlike = new("UNLIKE");

    public static readonly ActionBundleSocialCommentApi Approve = new("APPROVE");

    public static readonly ActionBundleSocialCommentApi Reject = new("REJECT");

    public TResult Match<TResult>(Func<TResult> onDelete,
        Func<TResult> onHide,
        Func<TResult> onUnhide,
        Func<TResult> onLike,
        Func<TResult> onUnlike,
        Func<TResult> onApprove,
        Func<TResult> onReject,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Delete => onDelete(),
            _ when this == Hide => onHide(),
            _ when this == Unhide => onUnhide(),
            _ when this == Like => onLike(),
            _ when this == Unlike => onUnlike(),
            _ when this == Approve => onApprove(),
            _ when this == Reject => onReject(),
            _ => otherwise(Value)
        };

    public void Match(Action onDelete,
        Action onHide,
        Action onUnhide,
        Action onLike,
        Action onUnlike,
        Action onApprove,
        Action onReject,
        Action<string> otherwise)
    {
        if (this == Delete) onDelete();
        else if (this == Hide) onHide();
        else if (this == Unhide) onUnhide();
        else if (this == Like) onLike();
        else if (this == Unlike) onUnlike();
        else if (this == Approve) onApprove();
        else if (this == Reject) onReject();
        else otherwise(Value);
    }
}
