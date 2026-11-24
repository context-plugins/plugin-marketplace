using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of logging that is enabled.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogType>))]
public sealed record LogType : OpenStringEnum<LogType>
{
    private LogType(string value) : base(value)
    {
    }

    public static readonly LogType Audio = new("AUDIO");

    public static readonly LogType Text = new("TEXT");

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
