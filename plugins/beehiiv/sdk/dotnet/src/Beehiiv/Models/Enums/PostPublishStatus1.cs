using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the post. If not provided, the default (<c>draft</c>) value will be used and the post will not be scheduled or published. Explicitly pass <c>confirmed</c> to have the post publish immediately (if no <c>scheduled_at</c> is provided) or at the <c>scheduled_at</c> time.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostPublishStatus1>))]
public sealed record PostPublishStatus1 : OpenStringEnum<PostPublishStatus1>
{
    private PostPublishStatus1(string value) : base(value)
    {
    }

    public static readonly PostPublishStatus1 Draft = new("draft");

    public static readonly PostPublishStatus1 Confirmed = new("confirmed");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onConfirmed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Confirmed => onConfirmed(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onConfirmed, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Confirmed) onConfirmed();
        else otherwise(Value);
    }
}
