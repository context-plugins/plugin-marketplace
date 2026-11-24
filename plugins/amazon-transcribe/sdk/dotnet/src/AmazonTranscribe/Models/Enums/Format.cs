using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Vtt = new("vtt");

    public static readonly Format Srt = new("srt");

    public TResult Match<TResult>(Func<TResult> onVtt, Func<TResult> onSrt, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Vtt => onVtt(),
            _ when this == Srt => onSrt(),
            _ => otherwise(Value)
        };

    public void Match(Action onVtt, Action onSrt, Action<string> otherwise)
    {
        if (this == Vtt) onVtt();
        else if (this == Srt) onSrt();
        else otherwise(Value);
    }
}
