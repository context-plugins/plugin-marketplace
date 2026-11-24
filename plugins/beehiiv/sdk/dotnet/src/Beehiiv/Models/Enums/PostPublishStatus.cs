using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PostPublishStatus>))]
public sealed record PostPublishStatus : OpenStringEnum<PostPublishStatus>
{
    private PostPublishStatus(string value) : base(value)
    {
    }

    public static readonly PostPublishStatus Draft = new("draft");

    public static readonly PostPublishStatus Confirmed = new("confirmed");

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
