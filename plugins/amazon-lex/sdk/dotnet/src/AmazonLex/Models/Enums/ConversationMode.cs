using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The conversation type that you are using the Amazon Lex V2. If the conversation mode is AUDIO you can send both audio and DTMF information. If the mode is TEXT you can only send text.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConversationMode>))]
public sealed record ConversationMode : OpenStringEnum<ConversationMode>
{
    private ConversationMode(string value) : base(value)
    {
    }

    public static readonly ConversationMode Audio = new("AUDIO");

    public static readonly ConversationMode Text = new("TEXT");

    public TResult Match<TResult>(Func<TResult> onAudio, Func<TResult> onText, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Audio => onAudio(),
            _ when this == Text => onText(),
            _ => otherwise(Value)
        };

    public void Match(Action onAudio, Action onText, Action<string> otherwise)
    {
        if (this == Audio) onAudio();
        else if (this == Text) onText();
        else otherwise(Value);
    }
}
