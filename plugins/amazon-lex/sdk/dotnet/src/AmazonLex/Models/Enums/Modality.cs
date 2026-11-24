using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether the test-set being imported contains written or spoken data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Modality>))]
public sealed record Modality : OpenStringEnum<Modality>
{
    private Modality(string value) : base(value)
    {
    }

    public static readonly Modality Text = new("Text");

    public static readonly Modality Audio = new("Audio");

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
