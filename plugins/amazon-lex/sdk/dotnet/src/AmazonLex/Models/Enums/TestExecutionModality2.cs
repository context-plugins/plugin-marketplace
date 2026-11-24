using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates whether audio or text is used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TestExecutionModality2>))]
public sealed record TestExecutionModality2 : OpenStringEnum<TestExecutionModality2>
{
    private TestExecutionModality2(string value) : base(value)
    {
    }

    public static readonly TestExecutionModality2 Text = new("Text");

    public static readonly TestExecutionModality2 Audio = new("Audio");

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
