using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates whether audio or text is used for the updated test set.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Modality2>))]
public sealed record Modality2 : OpenStringEnum<Modality2>
{
    private Modality2(string value) : base(value)
    {
    }

    public static readonly Modality2 Text = new("Text");

    public static readonly Modality2 Audio = new("Audio");

    public TResult Match<TResult>(Func<TResult> onText, Func<TResult> onAudio, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Audio => onAudio(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onAudio, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Audio) onAudio();
        else otherwise(Value);
    }
}
