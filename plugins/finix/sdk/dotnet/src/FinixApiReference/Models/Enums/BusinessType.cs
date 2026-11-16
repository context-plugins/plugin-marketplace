using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Include the value that best applies to the merchant.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BusinessType>))]
public sealed record BusinessType : OpenStringEnum<BusinessType>
{
    private BusinessType(string value) : base(value)
    {
    }

    public static readonly BusinessType IndividualSoleProprietorship = new("INDIVIDUAL_SOLE_PROPRIETORSHIP");

    public static readonly BusinessType Corporation = new("CORPORATION");

    public static readonly BusinessType LimitedLiabilityCompany = new("LIMITED_LIABILITY_COMPANY");

    public static readonly BusinessType Partnership = new("PARTNERSHIP");

    public static readonly BusinessType LimitedPartnership = new("LIMITED_PARTNERSHIP");

    public static readonly BusinessType GeneralPartnership = new("GENERAL_PARTNERSHIP");

    public static readonly BusinessType AssociationEstateTrust = new("ASSOCIATION_ESTATE_TRUST");

    public static readonly BusinessType TaxExemptOrganization = new("TAX_EXEMPT_ORGANIZATION");

    public static readonly BusinessType GovernmentAgency = new("GOVERNMENT_AGENCY");

    public TResult Match<TResult>(Func<TResult> onIndividualSoleProprietorship,
        Func<TResult> onCorporation,
        Func<TResult> onLimitedLiabilityCompany,
        Func<TResult> onPartnership,
        Func<TResult> onLimitedPartnership,
        Func<TResult> onGeneralPartnership,
        Func<TResult> onAssociationEstateTrust,
        Func<TResult> onTaxExemptOrganization,
        Func<TResult> onGovernmentAgency,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IndividualSoleProprietorship => onIndividualSoleProprietorship(),
            _ when this == Corporation => onCorporation(),
            _ when this == LimitedLiabilityCompany => onLimitedLiabilityCompany(),
            _ when this == Partnership => onPartnership(),
            _ when this == LimitedPartnership => onLimitedPartnership(),
            _ when this == GeneralPartnership => onGeneralPartnership(),
            _ when this == AssociationEstateTrust => onAssociationEstateTrust(),
            _ when this == TaxExemptOrganization => onTaxExemptOrganization(),
            _ when this == GovernmentAgency => onGovernmentAgency(),
            _ => otherwise(Value)
        };

    public void Match(Action onIndividualSoleProprietorship,
        Action onCorporation,
        Action onLimitedLiabilityCompany,
        Action onPartnership,
        Action onLimitedPartnership,
        Action onGeneralPartnership,
        Action onAssociationEstateTrust,
        Action onTaxExemptOrganization,
        Action onGovernmentAgency,
        Action<string> otherwise)
    {
        if (this == IndividualSoleProprietorship) onIndividualSoleProprietorship();
        else if (this == Corporation) onCorporation();
        else if (this == LimitedLiabilityCompany) onLimitedLiabilityCompany();
        else if (this == Partnership) onPartnership();
        else if (this == LimitedPartnership) onLimitedPartnership();
        else if (this == GeneralPartnership) onGeneralPartnership();
        else if (this == AssociationEstateTrust) onAssociationEstateTrust();
        else if (this == TaxExemptOrganization) onTaxExemptOrganization();
        else if (this == GovernmentAgency) onGovernmentAgency();
        else otherwise(Value);
    }
}
