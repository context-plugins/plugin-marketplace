using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi>))]
public sealed record XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi : OpenStringEnum<XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi>
{
    private XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi TranscribeListMedicalTranscriptionJobs = new(
        "Transcribe.ListMedicalTranscriptionJobs");

    public TResult Match<TResult>(Func<TResult> onTranscribeListMedicalTranscriptionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TranscribeListMedicalTranscriptionJobs => onTranscribeListMedicalTranscriptionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onTranscribeListMedicalTranscriptionJobs, Action<string> otherwise)
    {
        if (this == TranscribeListMedicalTranscriptionJobs) onTranscribeListMedicalTranscriptionJobs();
        else otherwise(Value);
    }
}
