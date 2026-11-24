using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1RazorpayPartnerDocumentsApi>))]
public sealed record Type1RazorpayPartnerDocumentsApi : OpenStringEnum<Type1RazorpayPartnerDocumentsApi>
{
    private Type1RazorpayPartnerDocumentsApi(string value) : base(value)
    {
    }

    public static readonly Type1RazorpayPartnerDocumentsApi AadharFront = new("aadhar_front");

    public static readonly Type1RazorpayPartnerDocumentsApi AadharBack = new("aadhar_back");

    public static readonly Type1RazorpayPartnerDocumentsApi PassportFront = new("passport_front");

    public static readonly Type1RazorpayPartnerDocumentsApi PassportBack = new("passport_back");

    public static readonly Type1RazorpayPartnerDocumentsApi VoterIdFront = new("voter_id_front");

    public static readonly Type1RazorpayPartnerDocumentsApi VoterIdBack = new("voter_id_back");

    public TResult Match<TResult>(Func<TResult> onAadharFront,
        Func<TResult> onAadharBack,
        Func<TResult> onPassportFront,
        Func<TResult> onPassportBack,
        Func<TResult> onVoterIdFront,
        Func<TResult> onVoterIdBack,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AadharFront => onAadharFront(),
            _ when this == AadharBack => onAadharBack(),
            _ when this == PassportFront => onPassportFront(),
            _ when this == PassportBack => onPassportBack(),
            _ when this == VoterIdFront => onVoterIdFront(),
            _ when this == VoterIdBack => onVoterIdBack(),
            _ => otherwise(Value)
        };

    public void Match(Action onAadharFront,
        Action onAadharBack,
        Action onPassportFront,
        Action onPassportBack,
        Action onVoterIdFront,
        Action onVoterIdBack,
        Action<string> otherwise)
    {
        if (this == AadharFront) onAadharFront();
        else if (this == AadharBack) onAadharBack();
        else if (this == PassportFront) onPassportFront();
        else if (this == PassportBack) onPassportBack();
        else if (this == VoterIdFront) onVoterIdFront();
        else if (this == VoterIdBack) onVoterIdBack();
        else otherwise(Value);
    }
}
