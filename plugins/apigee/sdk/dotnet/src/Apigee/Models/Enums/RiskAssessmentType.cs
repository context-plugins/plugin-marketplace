using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The risk assessment type of the security profile. Defaults to ADVANCED_API_SECURITY.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RiskAssessmentType>))]
public sealed record RiskAssessmentType : OpenStringEnum<RiskAssessmentType>
{
    private RiskAssessmentType(string value) : base(value)
    {
    }

    public static readonly RiskAssessmentType RiskAssessmentTypeUnspecified = new("RISK_ASSESSMENT_TYPE_UNSPECIFIED");

    public static readonly RiskAssessmentType Apigee = new("APIGEE");

    public static readonly RiskAssessmentType ApiHub = new("API_HUB");

    public TResult Match<TResult>(Func<TResult> onRiskAssessmentTypeUnspecified,
        Func<TResult> onApigee,
        Func<TResult> onApiHub,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RiskAssessmentTypeUnspecified => onRiskAssessmentTypeUnspecified(),
            _ when this == Apigee => onApigee(),
            _ when this == ApiHub => onApiHub(),
            _ => otherwise(Value)
        };

    public void Match(Action onRiskAssessmentTypeUnspecified,
        Action onApigee,
        Action onApiHub,
        Action<string> otherwise)
    {
        if (this == RiskAssessmentTypeUnspecified) onRiskAssessmentTypeUnspecified();
        else if (this == Apigee) onApigee();
        else if (this == ApiHub) onApiHub();
        else otherwise(Value);
    }
}
