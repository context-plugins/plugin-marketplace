using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi>))]
public sealed record XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi : OpenStringEnum<XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi>
{
    private XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi TranscribeGetMedicalScribeJob = new(
        "Transcribe.GetMedicalScribeJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeGetMedicalScribeJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeGetMedicalScribeJob => onTranscribeGetMedicalScribeJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeGetMedicalScribeJob, Action<string> otherwise)
    {
        if (this == TranscribeGetMedicalScribeJob) onTranscribeGetMedicalScribeJob();
        else otherwise(Value);
    }
}
