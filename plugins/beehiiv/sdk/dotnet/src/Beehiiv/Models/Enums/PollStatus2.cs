using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The current status of the poll.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PollStatus2>))]
public sealed record PollStatus2 : OpenStringEnum<PollStatus2>
{
    private PollStatus2(string value) : base(value)
    {
    }

    public static readonly PollStatus2 Draft = new("draft");

    public static readonly PollStatus2 Published = new("published");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onPublished, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onPublished, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
