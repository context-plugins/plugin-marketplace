using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates whether test set is audio or text.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TestExecutionModality>))]
public sealed record TestExecutionModality : OpenStringEnum<TestExecutionModality>
{
    private TestExecutionModality(string value) : base(value)
    {
    }

    public static readonly TestExecutionModality Text = new("Text");

    public static readonly TestExecutionModality Audio = new("Audio");

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
