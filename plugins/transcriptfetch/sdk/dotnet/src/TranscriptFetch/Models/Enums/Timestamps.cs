using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Timestamps>))]
public sealed record Timestamps : OpenStringEnum<Timestamps>
{
    private Timestamps(string value) : base(value)
    {
    }

    public static readonly Timestamps None = new("none");

    public static readonly Timestamps Segment = new("segment");

    public TResult Match<TResult>(Func<TResult> onNone, Func<TResult> onSegment, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Segment => onSegment(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onSegment, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Segment) onSegment();
        else otherwise(Value);
    }
}
