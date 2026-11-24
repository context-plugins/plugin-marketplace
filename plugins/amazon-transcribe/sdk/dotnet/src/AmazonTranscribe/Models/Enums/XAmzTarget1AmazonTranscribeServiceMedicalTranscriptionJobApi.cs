using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi>
{
    private XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi TranscribeGetMedicalTranscriptionJob = new(
        "Transcribe.GetMedicalTranscriptionJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeGetMedicalTranscriptionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeGetMedicalTranscriptionJob => onTranscribeGetMedicalTranscriptionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeGetMedicalTranscriptionJob, Action<string> otherwise)
    {
        if (this == TranscribeGetMedicalTranscriptionJob) onTranscribeGetMedicalTranscriptionJob();
        else otherwise(Value);
    }
}
