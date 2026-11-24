using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EmploymentType>))]
public sealed record EmploymentType : OpenStringEnum<EmploymentType>
{
    private EmploymentType(string value) : base(value)
    {
    }

    public static readonly EmploymentType EmploymentTypeUnspecified = new("EMPLOYMENT_TYPE_UNSPECIFIED");

    public static readonly EmploymentType FullTime = new("FULL_TIME");

    public static readonly EmploymentType PartTime = new("PART_TIME");

    public static readonly EmploymentType Contractor = new("CONTRACTOR");

    public static readonly EmploymentType ContractToHire = new("CONTRACT_TO_HIRE");

    public static readonly EmploymentType Temporary = new("TEMPORARY");

    public static readonly EmploymentType Intern = new("INTERN");

    public static readonly EmploymentType Volunteer = new("VOLUNTEER");

    public static readonly EmploymentType PerDiem = new("PER_DIEM");

    public static readonly EmploymentType FlyInFlyOut = new("FLY_IN_FLY_OUT");

    public static readonly EmploymentType OtherEmploymentType = new("OTHER_EMPLOYMENT_TYPE");

    public TResult Match<TResult>(Func<TResult> onEmploymentTypeUnspecified,
        Func<TResult> onFullTime,
        Func<TResult> onPartTime,
        Func<TResult> onContractor,
        Func<TResult> onContractToHire,
        Func<TResult> onTemporary,
        Func<TResult> onIntern,
        Func<TResult> onVolunteer,
        Func<TResult> onPerDiem,
        Func<TResult> onFlyInFlyOut,
        Func<TResult> onOtherEmploymentType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EmploymentTypeUnspecified => onEmploymentTypeUnspecified(),
            _ when this == FullTime => onFullTime(),
            _ when this == PartTime => onPartTime(),
            _ when this == Contractor => onContractor(),
            _ when this == ContractToHire => onContractToHire(),
            _ when this == Temporary => onTemporary(),
            _ when this == Intern => onIntern(),
            _ when this == Volunteer => onVolunteer(),
            _ when this == PerDiem => onPerDiem(),
            _ when this == FlyInFlyOut => onFlyInFlyOut(),
            _ when this == OtherEmploymentType => onOtherEmploymentType(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmploymentTypeUnspecified,
        Action onFullTime,
        Action onPartTime,
        Action onContractor,
        Action onContractToHire,
        Action onTemporary,
        Action onIntern,
        Action onVolunteer,
        Action onPerDiem,
        Action onFlyInFlyOut,
        Action onOtherEmploymentType,
        Action<string> otherwise)
    {
        if (this == EmploymentTypeUnspecified) onEmploymentTypeUnspecified();
        else if (this == FullTime) onFullTime();
        else if (this == PartTime) onPartTime();
        else if (this == Contractor) onContractor();
        else if (this == ContractToHire) onContractToHire();
        else if (this == Temporary) onTemporary();
        else if (this == Intern) onIntern();
        else if (this == Volunteer) onVolunteer();
        else if (this == PerDiem) onPerDiem();
        else if (this == FlyInFlyOut) onFlyInFlyOut();
        else if (this == OtherEmploymentType) onOtherEmploymentType();
        else otherwise(Value);
    }
}
