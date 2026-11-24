using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi>
{
    private XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi TranscribeDeleteMedicalTranscriptionJob = new(
        "Transcribe.DeleteMedicalTranscriptionJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteMedicalTranscriptionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteMedicalTranscriptionJob => onTranscribeDeleteMedicalTranscriptionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteMedicalTranscriptionJob, Action<string> otherwise)
    {
        if (this == TranscribeDeleteMedicalTranscriptionJob) onTranscribeDeleteMedicalTranscriptionJob();
        else otherwise(Value);
    }
}
