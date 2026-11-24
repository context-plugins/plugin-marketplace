using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi>))]
public sealed record XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi : OpenStringEnum<XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi>
{
    private XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi TranscribeStartMedicalScribeJob = new(
        "Transcribe.StartMedicalScribeJob");

    public TResult Match<TResult>(Func<TResult> onTranscribeStartMedicalScribeJob, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeStartMedicalScribeJob => onTranscribeStartMedicalScribeJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeStartMedicalScribeJob, Action<string> otherwise)
    {
        if (this == TranscribeStartMedicalScribeJob) onTranscribeStartMedicalScribeJob();
        else otherwise(Value);
    }
}
