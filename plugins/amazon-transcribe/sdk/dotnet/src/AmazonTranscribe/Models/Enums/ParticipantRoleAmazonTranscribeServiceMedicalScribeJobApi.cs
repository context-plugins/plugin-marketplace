using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Specify the participant that you want to flag. The options are CLINICIAN and PATIENT
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi>))]
public sealed record ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi : OpenStringEnum<ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi>
{
    private ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi(string value) : base(value)
    {
    }

    public static readonly ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi Patient = new("PATIENT");

    public static readonly ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi Clinician = new("CLINICIAN");

    public TResult Match<TResult>(Func<TResult> onPatient,
        Func<TResult> onClinician,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Patient => onPatient(),
            _ when this == Clinician => onClinician(),
            _ => otherwise(Value)
        };

    public void Match(Action onPatient, Action onClinician, Action<string> otherwise)
    {
        if (this == Patient) onPatient();
        else if (this == Clinician) onClinician();
        else otherwise(Value);
    }
}
