using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi>))]
public sealed record XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi : OpenStringEnum<XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi>
{
    private XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi TranscribeStartMedicalTranscriptionJob = new(
        "Transcribe.StartMedicalTranscriptionJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeStartMedicalTranscriptionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeStartMedicalTranscriptionJob => onTranscribeStartMedicalTranscriptionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeStartMedicalTranscriptionJob, Action<string> otherwise)
    {
        if (this == TranscribeStartMedicalTranscriptionJob) onTranscribeStartMedicalTranscriptionJob();
        else otherwise(Value);
    }
}
