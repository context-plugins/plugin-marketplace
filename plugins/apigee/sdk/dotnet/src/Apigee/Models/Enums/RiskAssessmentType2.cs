using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RiskAssessmentType2>))]
public sealed record RiskAssessmentType2 : OpenStringEnum<RiskAssessmentType2>
{
    private RiskAssessmentType2(string value) : base(value)
    {
    }

    public static readonly RiskAssessmentType2 RiskAssessmentTypeUnspecified = new("RISK_ASSESSMENT_TYPE_UNSPECIFIED");

    public static readonly RiskAssessmentType2 Apigee = new("APIGEE");

    public static readonly RiskAssessmentType2 ApiHub = new("API_HUB");

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
