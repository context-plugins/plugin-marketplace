using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi>))]
public sealed record XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi : OpenStringEnum<XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi>
{
    private XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi TranscribeStartTranscriptionJob = new(
        "Transcribe.StartTranscriptionJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeStartTranscriptionJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeStartTranscriptionJob => onTranscribeStartTranscriptionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeStartTranscriptionJob, Action<string> otherwise)
    {
        if (this == TranscribeStartTranscriptionJob) onTranscribeStartTranscriptionJob();
        else otherwise(Value);
    }
}
