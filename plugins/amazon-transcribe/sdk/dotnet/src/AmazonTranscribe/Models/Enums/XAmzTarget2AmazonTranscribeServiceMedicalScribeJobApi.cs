using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi>
{
    private XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi TranscribeListMedicalScribeJobs = new(
        "Transcribe.ListMedicalScribeJobs");

    public TResult Match<TResult>(Func<TResult> onTranscribeListMedicalScribeJobs, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListMedicalScribeJobs => onTranscribeListMedicalScribeJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListMedicalScribeJobs, Action<string> otherwise)
    {
        if (this == TranscribeListMedicalScribeJobs) onTranscribeListMedicalScribeJobs();
        else otherwise(Value);
    }
}
