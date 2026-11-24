using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi>
{
    private XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi TranscribeListTranscriptionJobs = new(
        "Transcribe.ListTranscriptionJobs");

    public TResult Match<TResult>(Func<TResult> onTranscribeListTranscriptionJobs, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListTranscriptionJobs => onTranscribeListTranscriptionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListTranscriptionJobs, Action<string> otherwise)
    {
        if (this == TranscribeListTranscriptionJobs) onTranscribeListTranscriptionJobs();
        else otherwise(Value);
    }
}
