using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusTranscriptfetchTranscriptsApi>))]
public sealed record StatusTranscriptfetchTranscriptsApi : OpenStringEnum<StatusTranscriptfetchTranscriptsApi>
{
    private StatusTranscriptfetchTranscriptsApi(string value) : base(value)
    {
    }

    public static readonly StatusTranscriptfetchTranscriptsApi Processing = new("processing");

    public static readonly StatusTranscriptfetchTranscriptsApi Completed = new("completed");

    public static readonly StatusTranscriptfetchTranscriptsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onProcessing, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
