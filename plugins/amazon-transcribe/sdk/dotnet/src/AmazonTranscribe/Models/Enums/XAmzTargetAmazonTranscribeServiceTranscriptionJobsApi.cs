using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi>
{
    private XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi TranscribeDeleteTranscriptionJob = new(
        "Transcribe.DeleteTranscriptionJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteTranscriptionJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteTranscriptionJob => onTranscribeDeleteTranscriptionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteTranscriptionJob, Action<string> otherwise)
    {
        if (this == TranscribeDeleteTranscriptionJob) onTranscribeDeleteTranscriptionJob();
        else otherwise(Value);
    }
}
