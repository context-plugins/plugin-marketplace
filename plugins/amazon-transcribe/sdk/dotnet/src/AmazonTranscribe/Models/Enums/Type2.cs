using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Specify whether your input media contains only one person (DICTATION) or contains a conversation between two people (CONVERSATION). For example, DICTATION could be used for a medical professional wanting to transcribe voice memos; CONVERSATION could be used for transcribing the doctor-patient dialogue during the patient's office visit.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Conversation = new("CONVERSATION");

    public static readonly Type2 Dictation = new("DICTATION");

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
