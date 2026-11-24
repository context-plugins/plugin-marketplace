using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The criterion by which to bin the results.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name1>))]
public sealed record Name1 : OpenStringEnum<Name1>
{
    private Name1(string value) : base(value)
    {
    }

    public static readonly Name1 ConversationStartTime = new("ConversationStartTime");

    public static readonly Name1 UtteranceTimestamp = new("UtteranceTimestamp");

    public TResult Match<TResult>(Func<TResult> onConversationStartTime,
        Func<TResult> onUtteranceTimestamp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConversationStartTime => onConversationStartTime(),
            _ when this == UtteranceTimestamp => onUtteranceTimestamp(),
            _ => otherwise(Value)
        };

    public void Match(Action onConversationStartTime, Action onUtteranceTimestamp, Action<string> otherwise)
    {
        if (this == ConversationStartTime) onConversationStartTime();
        else if (this == UtteranceTimestamp) onUtteranceTimestamp();
        else otherwise(Value);
    }
}
