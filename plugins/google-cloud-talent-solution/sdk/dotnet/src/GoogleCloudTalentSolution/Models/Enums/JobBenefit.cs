using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JobBenefit>))]
public sealed record JobBenefit : OpenStringEnum<JobBenefit>
{
    private JobBenefit(string value) : base(value)
    {
    }

    public static readonly JobBenefit JobBenefitUnspecified = new("JOB_BENEFIT_UNSPECIFIED");

    public static readonly JobBenefit ChildCare = new("CHILD_CARE");

    public static readonly JobBenefit Dental = new("DENTAL");

    public static readonly JobBenefit DomesticPartner = new("DOMESTIC_PARTNER");

    public static readonly JobBenefit FlexibleHours = new("FLEXIBLE_HOURS");

    public static readonly JobBenefit Medical = new("MEDICAL");

    public static readonly JobBenefit LifeInsurance = new("LIFE_INSURANCE");

    public static readonly JobBenefit ParentalLeave = new("PARENTAL_LEAVE");

    public static readonly JobBenefit RetirementPlan = new("RETIREMENT_PLAN");

    public static readonly JobBenefit SickDays = new("SICK_DAYS");

    public static readonly JobBenefit Vacation = new("VACATION");

    public static readonly JobBenefit Vision = new("VISION");

    public TResult Match<TResult>(Func<TResult> onJobBenefitUnspecified,
        Func<TResult> onChildCare,
        Func<TResult> onDental,
        Func<TResult> onDomesticPartner,
        Func<TResult> onFlexibleHours,
        Func<TResult> onMedical,
        Func<TResult> onLifeInsurance,
        Func<TResult> onParentalLeave,
        Func<TResult> onRetirementPlan,
        Func<TResult> onSickDays,
        Func<TResult> onVacation,
        Func<TResult> onVision,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JobBenefitUnspecified => onJobBenefitUnspecified(),
            _ when this == ChildCare => onChildCare(),
            _ when this == Dental => onDental(),
            _ when this == DomesticPartner => onDomesticPartner(),
            _ when this == FlexibleHours => onFlexibleHours(),
            _ when this == Medical => onMedical(),
            _ when this == LifeInsurance => onLifeInsurance(),
            _ when this == ParentalLeave => onParentalLeave(),
            _ when this == RetirementPlan => onRetirementPlan(),
            _ when this == SickDays => onSickDays(),
            _ when this == Vacation => onVacation(),
            _ when this == Vision => onVision(),
            _ => otherwise(Value)
        };

    public void Match(Action onJobBenefitUnspecified,
        Action onChildCare,
        Action onDental,
        Action onDomesticPartner,
        Action onFlexibleHours,
        Action onMedical,
        Action onLifeInsurance,
        Action onParentalLeave,
        Action onRetirementPlan,
        Action onSickDays,
        Action onVacation,
        Action onVision,
        Action<string> otherwise)
    {
        if (this == JobBenefitUnspecified) onJobBenefitUnspecified();
        else if (this == ChildCare) onChildCare();
        else if (this == Dental) onDental();
        else if (this == DomesticPartner) onDomesticPartner();
        else if (this == FlexibleHours) onFlexibleHours();
        else if (this == Medical) onMedical();
        else if (this == LifeInsurance) onLifeInsurance();
        else if (this == ParentalLeave) onParentalLeave();
        else if (this == RetirementPlan) onRetirementPlan();
        else if (this == SickDays) onSickDays();
        else if (this == Vacation) onVacation();
        else if (this == Vision) onVision();
        else otherwise(Value);
    }
}
