using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the post.&lt;br&gt;<c>draft</c> - not been scheduled.&lt;br&gt;<c>confirmed</c> - The post will be active after the <c>scheduled_at</c>.&lt;br&gt;<c>archived</c> - The post is no longer active.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostStatus>))]
public sealed record PostStatus : OpenStringEnum<PostStatus>
{
    private PostStatus(string value) : base(value)
    {
    }

    public static readonly PostStatus Draft = new("draft");

    public static readonly PostStatus Confirmed = new("confirmed");

    public static readonly PostStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onConfirmed,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Confirmed => onConfirmed(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onConfirmed, Action onArchived, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Confirmed) onConfirmed();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
