using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Transition the post's status. Use <c>confirmed</c> to schedule or publish a draft post. Only the <c>draft</c> → <c>confirmed</c> transition is supported — a confirmed post cannot be moved back to <c>draft</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostPublishStatus2>))]
public sealed record PostPublishStatus2 : OpenStringEnum<PostPublishStatus2>
{
    private PostPublishStatus2(string value) : base(value)
    {
    }

    public static readonly PostPublishStatus2 Draft = new("draft");

    public static readonly PostPublishStatus2 Confirmed = new("confirmed");

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
