using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeType>))]
public sealed record XAmznTranscribeType : OpenStringEnum<XAmznTranscribeType>
{
    private XAmznTranscribeType(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeType Conversation = new("CONVERSATION");

    public static readonly XAmznTranscribeType Dictation = new("DICTATION");

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
