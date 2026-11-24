using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi>))]
public sealed record XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi : OpenStringEnum<XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi>
{
    private XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi TranscribeDeleteMedicalScribeJob = new(
        "Transcribe.DeleteMedicalScribeJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeDeleteMedicalScribeJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeDeleteMedicalScribeJob => onTranscribeDeleteMedicalScribeJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeDeleteMedicalScribeJob, Action<string> otherwise)
    {
        if (this == TranscribeDeleteMedicalScribeJob) onTranscribeDeleteMedicalScribeJob();
        else otherwise(Value);
    }
}
