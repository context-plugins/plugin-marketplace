using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the transcript format that you specified in your request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TranscriptFormat>))]
public sealed record TranscriptFormat : OpenStringEnum<TranscriptFormat>
{
    private TranscriptFormat(string value) : base(value)
    {
    }

    public static readonly TranscriptFormat Spoken = new("spoken");

    public static readonly TranscriptFormat Written = new("written");

    public TResult Match<TResult>(Func<TResult> onSpoken, Func<TResult> onWritten, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Spoken => onSpoken(),
            _ when this == Written => onWritten(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpoken, Action onWritten, Action<string> otherwise)
    {
        if (this == Spoken) onSpoken();
        else if (this == Written) onWritten();
        else otherwise(Value);
    }
}
