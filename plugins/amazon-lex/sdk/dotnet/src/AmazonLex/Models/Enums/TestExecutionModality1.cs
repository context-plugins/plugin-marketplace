using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether the data used for the test execution is written or spoken.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TestExecutionModality1>))]
public sealed record TestExecutionModality1 : OpenStringEnum<TestExecutionModality1>
{
    private TestExecutionModality1(string value) : base(value)
    {
    }

    public static readonly TestExecutionModality1 Text = new("Text");

    public static readonly TestExecutionModality1 Audio = new("Audio");

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
