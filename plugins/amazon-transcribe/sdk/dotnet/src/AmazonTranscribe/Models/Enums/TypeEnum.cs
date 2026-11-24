using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Indicates whether the input media is a dictation or a conversation, as specified in the StartMedicalTranscriptionJob request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Conversation = new("CONVERSATION");

    public static readonly TypeEnum Dictation = new("DICTATION");

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
