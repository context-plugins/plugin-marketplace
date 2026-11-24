using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi>
{
    private XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi TranscribeGetTranscriptionJob = new(
        "Transcribe.GetTranscriptionJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeGetTranscriptionJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeGetTranscriptionJob => onTranscribeGetTranscriptionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeGetTranscriptionJob, Action<string> otherwise)
    {
        if (this == TranscribeGetTranscriptionJob) onTranscribeGetTranscriptionJob();
        else otherwise(Value);
    }
}
