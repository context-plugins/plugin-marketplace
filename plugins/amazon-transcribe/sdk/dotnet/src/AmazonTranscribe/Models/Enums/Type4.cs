using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the type of audio you specified in your request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 Conversation = new("CONVERSATION");

    public static readonly Type4 Dictation = new("DICTATION");

    public TResult Match<TResult>(Func<TResult> onConversation,
        Func<TResult> onDictation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Conversation => onConversation(),
            _ when this == Dictation => onDictation(),
            _ => otherwise(Value)
        };

    public void Match(Action onConversation, Action onDictation, Action<string> otherwise)
    {
        if (this == Conversation) onConversation();
        else if (this == Dictation) onDictation();
        else otherwise(Value);
    }
}
