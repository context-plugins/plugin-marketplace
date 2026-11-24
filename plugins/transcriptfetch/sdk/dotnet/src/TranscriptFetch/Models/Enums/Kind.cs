using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind TranscriptBatch = new("transcript_batch");

    public TResult Match<TResult>(Func<TResult> onTranscriptBatch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscriptBatch => onTranscriptBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscriptBatch, Action<string> otherwise)
    {
        if (this == TranscriptBatch) onTranscriptBatch();
        else otherwise(Value);
    }
}
