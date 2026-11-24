using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of logging to enable. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered to an S3 bucket.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogType1>))]
public sealed record LogType1 : OpenStringEnum<LogType1>
{
    private LogType1(string value) : base(value)
    {
    }

    public static readonly LogType1 Audio = new("AUDIO");

    public static readonly LogType1 Text = new("TEXT");

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
