using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The final state of the conversation. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConversationEndState>))]
public sealed record ConversationEndState : OpenStringEnum<ConversationEndState>
{
    private ConversationEndState(string value) : base(value)
    {
    }

    public static readonly ConversationEndState Success = new("Success");

    public static readonly ConversationEndState Failure = new("Failure");

    public static readonly ConversationEndState Dropped = new("Dropped");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onFailure,
        Func<TResult> onDropped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Failure => onFailure(),
            _ when this == Dropped => onDropped(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onFailure, Action onDropped, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Failure) onFailure();
        else if (this == Dropped) onDropped();
        else otherwise(Value);
    }
}
