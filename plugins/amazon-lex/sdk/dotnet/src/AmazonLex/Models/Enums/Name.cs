using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies the time metric by which to bin the analytics data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name>))]
public sealed record Name : OpenStringEnum<Name>
{
    private Name(string value) : base(value)
    {
    }

    public static readonly Name ConversationStartTime = new("ConversationStartTime");

    public static readonly Name UtteranceTimestamp = new("UtteranceTimestamp");

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
