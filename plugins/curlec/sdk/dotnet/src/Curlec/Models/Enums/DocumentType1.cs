using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DocumentType1>))]
public sealed record DocumentType1 : OpenStringEnum<DocumentType1>
{
    private DocumentType1(string value) : base(value)
    {
    }

    public static readonly DocumentType1 PersonalPan = new("personal_pan");

    public static readonly DocumentType1 AadharFront = new("aadhar_front");

    public static readonly DocumentType1 AadharBack = new("aadhar_back");

    public static readonly DocumentType1 PassportFront = new("passport_front");

    public static readonly DocumentType1 PassportBack = new("passport_back");

    public static readonly DocumentType1 VoterIdFront = new("voter_id_front");

    public static readonly DocumentType1 VoterIdBack = new("voter_id_back");

    public TResult Match<TResult>(Func<TResult> onPersonalPan,
        Func<TResult> onAadharFront,
        Func<TResult> onAadharBack,
        Func<TResult> onPassportFront,
        Func<TResult> onPassportBack,
        Func<TResult> onVoterIdFront,
        Func<TResult> onVoterIdBack,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PersonalPan => onPersonalPan(),
            _ when this == AadharFront => onAadharFront(),
            _ when this == AadharBack => onAadharBack(),
            _ when this == PassportFront => onPassportFront(),
            _ when this == PassportBack => onPassportBack(),
            _ when this == VoterIdFront => onVoterIdFront(),
            _ when this == VoterIdBack => onVoterIdBack(),
            _ => otherwise(Value)
        };

    public void Match(Action onPersonalPan,
        Action onAadharFront,
        Action onAadharBack,
        Action onPassportFront,
        Action onPassportBack,
        Action onVoterIdFront,
        Action onVoterIdBack,
        Action<string> otherwise)
    {
        if (this == PersonalPan) onPersonalPan();
        else if (this == AadharFront) onAadharFront();
        else if (this == AadharBack) onAadharBack();
        else if (this == PassportFront) onPassportFront();
        else if (this == PassportBack) onPassportBack();
        else if (this == VoterIdFront) onVoterIdFront();
        else if (this == VoterIdBack) onVoterIdBack();
        else otherwise(Value);
    }
}
