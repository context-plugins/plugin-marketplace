using System;
using System.Text.Json.Serialization;
using Lili.Core.Enum;

namespace Lili.Models.Enums;

/// <summary>
/// The type of the file
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LlcFileType>))]
public sealed record LlcFileType : OpenStringEnum<LlcFileType>
{
    private LlcFileType(string value) : base(value)
    {
    }

    public static readonly LlcFileType IrsEinLetter = new("IRS_EIN_LETTER");

    public static readonly LlcFileType ArticlesOfOrganization = new("ARTICLES_OF_ORGANIZATION");

    public static readonly LlcFileType LetterOfReinstatement = new("LETTER_OF_REINSTATEMENT");

    public static readonly LlcFileType GovernmentIdentification = new("GOVERNMENT_IDENTIFICATION");

    public static readonly LlcFileType ArticlesOfIncorporation = new("ARTICLES_OF_INCORPORATION");

    public static readonly LlcFileType SignedPartnershipAgreement = new("SIGNED_PARTNERSHIP_AGREEMENT");

    public static readonly LlcFileType AmendmentDocument = new("AMENDMENT_DOCUMENT");

    public static readonly LlcFileType OperatingAgreement = new("OPERATING_AGREEMENT");

    public static readonly LlcFileType UtilityBill = new("UTILITY_BILL");

    public static readonly LlcFileType Passport = new("PASSPORT");

    public static readonly LlcFileType Ss4Document = new("SS4_DOCUMENT");

    public TResult Match<TResult>(Func<TResult> onIrsEinLetter,
        Func<TResult> onArticlesOfOrganization,
        Func<TResult> onLetterOfReinstatement,
        Func<TResult> onGovernmentIdentification,
        Func<TResult> onArticlesOfIncorporation,
        Func<TResult> onSignedPartnershipAgreement,
        Func<TResult> onAmendmentDocument,
        Func<TResult> onOperatingAgreement,
        Func<TResult> onUtilityBill,
        Func<TResult> onPassport,
        Func<TResult> onSs4Document,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IrsEinLetter => onIrsEinLetter(),
            _ when this == ArticlesOfOrganization => onArticlesOfOrganization(),
            _ when this == LetterOfReinstatement => onLetterOfReinstatement(),
            _ when this == GovernmentIdentification => onGovernmentIdentification(),
            _ when this == ArticlesOfIncorporation => onArticlesOfIncorporation(),
            _ when this == SignedPartnershipAgreement => onSignedPartnershipAgreement(),
            _ when this == AmendmentDocument => onAmendmentDocument(),
            _ when this == OperatingAgreement => onOperatingAgreement(),
            _ when this == UtilityBill => onUtilityBill(),
            _ when this == Passport => onPassport(),
            _ when this == Ss4Document => onSs4Document(),
            _ => otherwise(Value)
        };

    public void Match(Action onIrsEinLetter,
        Action onArticlesOfOrganization,
        Action onLetterOfReinstatement,
        Action onGovernmentIdentification,
        Action onArticlesOfIncorporation,
        Action onSignedPartnershipAgreement,
        Action onAmendmentDocument,
        Action onOperatingAgreement,
        Action onUtilityBill,
        Action onPassport,
        Action onSs4Document,
        Action<string> otherwise)
    {
        if (this == IrsEinLetter) onIrsEinLetter();
        else if (this == ArticlesOfOrganization) onArticlesOfOrganization();
        else if (this == LetterOfReinstatement) onLetterOfReinstatement();
        else if (this == GovernmentIdentification) onGovernmentIdentification();
        else if (this == ArticlesOfIncorporation) onArticlesOfIncorporation();
        else if (this == SignedPartnershipAgreement) onSignedPartnershipAgreement();
        else if (this == AmendmentDocument) onAmendmentDocument();
        else if (this == OperatingAgreement) onOperatingAgreement();
        else if (this == UtilityBill) onUtilityBill();
        else if (this == Passport) onPassport();
        else if (this == Ss4Document) onSs4Document();
        else otherwise(Value);
    }
}
