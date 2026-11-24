using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeTranscriptFormat>))]
public sealed record XAmznTranscribeTranscriptFormat : OpenStringEnum<XAmznTranscribeTranscriptFormat>
{
    private XAmznTranscribeTranscriptFormat(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeTranscriptFormat Spoken = new("spoken");

    public static readonly XAmznTranscribeTranscriptFormat Written = new("written");

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
