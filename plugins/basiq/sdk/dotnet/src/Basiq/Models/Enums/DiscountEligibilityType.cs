using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of the specific eligibility constraint for a discountType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DiscountEligibilityType>))]
public sealed record DiscountEligibilityType : OpenStringEnum<DiscountEligibilityType>
{
    private DiscountEligibilityType(string value) : base(value)
    {
    }

    public static readonly DiscountEligibilityType Business = new("BUSINESS");

    public static readonly DiscountEligibilityType EmploymentStatus = new("EMPLOYMENT_STATUS");

    public static readonly DiscountEligibilityType Introductory = new("INTRODUCTORY");

    public static readonly DiscountEligibilityType MaxAge = new("MAX_AGE");

    public static readonly DiscountEligibilityType MinAge = new("MIN_AGE");

    public static readonly DiscountEligibilityType MinIncome = new("MIN_INCOME");

    public static readonly DiscountEligibilityType MinTurnover = new("MIN_TURNOVER");

    public static readonly DiscountEligibilityType NaturalPerson = new("NATURAL_PERSON");

    public static readonly DiscountEligibilityType Other = new("OTHER");

    public static readonly DiscountEligibilityType PensionRecipient = new("PENSION_RECIPIENT");

    public static readonly DiscountEligibilityType ResidencyStatus = new("RESIDENCY_STATUS");

    public static readonly DiscountEligibilityType Staff = new("STAFF");

    public static readonly DiscountEligibilityType Student = new("STUDENT");

    public TResult Match<TResult>(Func<TResult> onBusiness,
        Func<TResult> onEmploymentStatus,
        Func<TResult> onIntroductory,
        Func<TResult> onMaxAge,
        Func<TResult> onMinAge,
        Func<TResult> onMinIncome,
        Func<TResult> onMinTurnover,
        Func<TResult> onNaturalPerson,
        Func<TResult> onOther,
        Func<TResult> onPensionRecipient,
        Func<TResult> onResidencyStatus,
        Func<TResult> onStaff,
        Func<TResult> onStudent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Business => onBusiness(),
            _ when this == EmploymentStatus => onEmploymentStatus(),
            _ when this == Introductory => onIntroductory(),
            _ when this == MaxAge => onMaxAge(),
            _ when this == MinAge => onMinAge(),
            _ when this == MinIncome => onMinIncome(),
            _ when this == MinTurnover => onMinTurnover(),
            _ when this == NaturalPerson => onNaturalPerson(),
            _ when this == Other => onOther(),
            _ when this == PensionRecipient => onPensionRecipient(),
            _ when this == ResidencyStatus => onResidencyStatus(),
            _ when this == Staff => onStaff(),
            _ when this == Student => onStudent(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusiness,
        Action onEmploymentStatus,
        Action onIntroductory,
        Action onMaxAge,
        Action onMinAge,
        Action onMinIncome,
        Action onMinTurnover,
        Action onNaturalPerson,
        Action onOther,
        Action onPensionRecipient,
        Action onResidencyStatus,
        Action onStaff,
        Action onStudent,
        Action<string> otherwise)
    {
        if (this == Business) onBusiness();
        else if (this == EmploymentStatus) onEmploymentStatus();
        else if (this == Introductory) onIntroductory();
        else if (this == MaxAge) onMaxAge();
        else if (this == MinAge) onMinAge();
        else if (this == MinIncome) onMinIncome();
        else if (this == MinTurnover) onMinTurnover();
        else if (this == NaturalPerson) onNaturalPerson();
        else if (this == Other) onOther();
        else if (this == PensionRecipient) onPensionRecipient();
        else if (this == ResidencyStatus) onResidencyStatus();
        else if (this == Staff) onStaff();
        else if (this == Student) onStudent();
        else otherwise(Value);
    }
}
