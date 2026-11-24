using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The measure by which to sort the session analytics data. conversationStartTime – The date and time when the conversation began. A conversation is defined as a unique combination of a sessionId and an originatingRequestId. numberOfTurns – The number of turns that the session took. conversationDurationSeconds – The duration of the conversation in seconds.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name25>))]
public sealed record Name25 : OpenStringEnum<Name25>
{
    private Name25(string value) : base(value)
    {
    }

    public static readonly Name25 ConversationStartTime = new("ConversationStartTime");

    public static readonly Name25 NumberOfTurns = new("NumberOfTurns");

    public static readonly Name25 Duration = new("Duration");

    public TResult Match<TResult>(Func<TResult> onConversationStartTime,
        Func<TResult> onNumberOfTurns,
        Func<TResult> onDuration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConversationStartTime => onConversationStartTime(),
            _ when this == NumberOfTurns => onNumberOfTurns(),
            _ when this == Duration => onDuration(),
            _ => otherwise(Value)
        };

    public void Match(Action onConversationStartTime,
        Action onNumberOfTurns,
        Action onDuration,
        Action<string> otherwise)
    {
        if (this == ConversationStartTime) onConversationStartTime();
        else if (this == NumberOfTurns) onNumberOfTurns();
        else if (this == Duration) onDuration();
        else otherwise(Value);
    }
}
