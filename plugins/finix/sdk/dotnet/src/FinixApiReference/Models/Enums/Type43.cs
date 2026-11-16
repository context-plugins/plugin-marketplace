using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of document. Finix may return more enums than those provided. Ensure your code accepts additional enums returned by Finix.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type43>))]
public sealed record Type43 : OpenStringEnum<Type43>
{
    private Type43(string value) : base(value)
    {
    }

    public static readonly Type43 BankStatement = new("BANK_STATEMENT");

    public static readonly Type43 BankStatementOneMonth = new("BANK_STATEMENT_ONE_MONTH");

    public static readonly Type43 BankStatementThreeMonths = new("BANK_STATEMENT_THREE_MONTHS");

    public static readonly Type43 BusinessAddressDocument = new("BUSINESS_ADDRESS_DOCUMENT");

    public static readonly Type43 BusinessAddressVerification = new("BUSINESS_ADDRESS_VERIFICATION");

    public static readonly Type43 BusinessIncorporationDocument = new("BUSINESS_INCORPORATION_DOCUMENT");

    public static readonly Type43 BusinessOwnershipStructure = new("BUSINESS_OWNERSHIP_STRUCTURE");

    public static readonly Type43 BusinessRegistration = new("BUSINESS_REGISTRATION");

    public static readonly Type43 BusinessRegistrationDocument = new("BUSINESS_REGISTRATION_DOCUMENT");

    public static readonly Type43 BusinessTaxExemptionStatusDocument = new("BUSINESS_TAX_EXEMPTION_STATUS_DOCUMENT");

    public static readonly Type43 BusinessTaxIdDocument = new("BUSINESS_TAX_ID_DOCUMENT");

    public static readonly Type43 DeviceIdleImage = new("DEVICE_IDLE_IMAGE");

    public static readonly Type43 DigitalSignature = new("DIGITAL_SIGNATURE");

    public static readonly Type43 DriversLicenseBack = new("DRIVERS_LICENSE_BACK");

    public static readonly Type43 DriversLicenseFront = new("DRIVERS_LICENSE_FRONT");

    public static readonly Type43 EnhancedDueDiligenceDocument = new("ENHANCED_DUE_DILIGENCE_DOCUMENT");

    public static readonly Type43 IdentificationCardBack = new("IDENTIFICATION_CARD_BACK");

    public static readonly Type43 IdentificationCardFront = new("IDENTIFICATION_CARD_FRONT");

    public static readonly Type43 Other = new("OTHER");

    public static readonly Type43 OwnerGovernmentIssuedPhotoId = new("OWNER_GOVERNMENT_ISSUED_PHOTO_ID");

    public static readonly Type43 OwnerTaxIdDocument = new("OWNER_TAX_ID_DOCUMENT");

    public static readonly Type43 Passport = new("PASSPORT");

    public static readonly Type43 PciDocument = new("PCI_DOCUMENT");

    public static readonly Type43 ProcessingStatement = new("PROCESSING_STATEMENT");

    public static readonly Type43 ScreenRecording = new("SCREEN_RECORDING");

    public static readonly Type43 TaxDocument = new("TAX_DOCUMENT");

    public static readonly Type43 VideoDocument = new("VIDEO_DOCUMENT");

    public TResult Match<TResult>(Func<TResult> onBankStatement,
        Func<TResult> onBankStatementOneMonth,
        Func<TResult> onBankStatementThreeMonths,
        Func<TResult> onBusinessAddressDocument,
        Func<TResult> onBusinessAddressVerification,
        Func<TResult> onBusinessIncorporationDocument,
        Func<TResult> onBusinessOwnershipStructure,
        Func<TResult> onBusinessRegistration,
        Func<TResult> onBusinessRegistrationDocument,
        Func<TResult> onBusinessTaxExemptionStatusDocument,
        Func<TResult> onBusinessTaxIdDocument,
        Func<TResult> onDeviceIdleImage,
        Func<TResult> onDigitalSignature,
        Func<TResult> onDriversLicenseBack,
        Func<TResult> onDriversLicenseFront,
        Func<TResult> onEnhancedDueDiligenceDocument,
        Func<TResult> onIdentificationCardBack,
        Func<TResult> onIdentificationCardFront,
        Func<TResult> onOther,
        Func<TResult> onOwnerGovernmentIssuedPhotoId,
        Func<TResult> onOwnerTaxIdDocument,
        Func<TResult> onPassport,
        Func<TResult> onPciDocument,
        Func<TResult> onProcessingStatement,
        Func<TResult> onScreenRecording,
        Func<TResult> onTaxDocument,
        Func<TResult> onVideoDocument,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankStatement => onBankStatement(),
            _ when this == BankStatementOneMonth => onBankStatementOneMonth(),
            _ when this == BankStatementThreeMonths => onBankStatementThreeMonths(),
            _ when this == BusinessAddressDocument => onBusinessAddressDocument(),
            _ when this == BusinessAddressVerification => onBusinessAddressVerification(),
            _ when this == BusinessIncorporationDocument => onBusinessIncorporationDocument(),
            _ when this == BusinessOwnershipStructure => onBusinessOwnershipStructure(),
            _ when this == BusinessRegistration => onBusinessRegistration(),
            _ when this == BusinessRegistrationDocument => onBusinessRegistrationDocument(),
            _ when this == BusinessTaxExemptionStatusDocument => onBusinessTaxExemptionStatusDocument(),
            _ when this == BusinessTaxIdDocument => onBusinessTaxIdDocument(),
            _ when this == DeviceIdleImage => onDeviceIdleImage(),
            _ when this == DigitalSignature => onDigitalSignature(),
            _ when this == DriversLicenseBack => onDriversLicenseBack(),
            _ when this == DriversLicenseFront => onDriversLicenseFront(),
            _ when this == EnhancedDueDiligenceDocument => onEnhancedDueDiligenceDocument(),
            _ when this == IdentificationCardBack => onIdentificationCardBack(),
            _ when this == IdentificationCardFront => onIdentificationCardFront(),
            _ when this == Other => onOther(),
            _ when this == OwnerGovernmentIssuedPhotoId => onOwnerGovernmentIssuedPhotoId(),
            _ when this == OwnerTaxIdDocument => onOwnerTaxIdDocument(),
            _ when this == Passport => onPassport(),
            _ when this == PciDocument => onPciDocument(),
            _ when this == ProcessingStatement => onProcessingStatement(),
            _ when this == ScreenRecording => onScreenRecording(),
            _ when this == TaxDocument => onTaxDocument(),
            _ when this == VideoDocument => onVideoDocument(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankStatement,
        Action onBankStatementOneMonth,
        Action onBankStatementThreeMonths,
        Action onBusinessAddressDocument,
        Action onBusinessAddressVerification,
        Action onBusinessIncorporationDocument,
        Action onBusinessOwnershipStructure,
        Action onBusinessRegistration,
        Action onBusinessRegistrationDocument,
        Action onBusinessTaxExemptionStatusDocument,
        Action onBusinessTaxIdDocument,
        Action onDeviceIdleImage,
        Action onDigitalSignature,
        Action onDriversLicenseBack,
        Action onDriversLicenseFront,
        Action onEnhancedDueDiligenceDocument,
        Action onIdentificationCardBack,
        Action onIdentificationCardFront,
        Action onOther,
        Action onOwnerGovernmentIssuedPhotoId,
        Action onOwnerTaxIdDocument,
        Action onPassport,
        Action onPciDocument,
        Action onProcessingStatement,
        Action onScreenRecording,
        Action onTaxDocument,
        Action onVideoDocument,
        Action<string> otherwise)
    {
        if (this == BankStatement) onBankStatement();
        else if (this == BankStatementOneMonth) onBankStatementOneMonth();
        else if (this == BankStatementThreeMonths) onBankStatementThreeMonths();
        else if (this == BusinessAddressDocument) onBusinessAddressDocument();
        else if (this == BusinessAddressVerification) onBusinessAddressVerification();
        else if (this == BusinessIncorporationDocument) onBusinessIncorporationDocument();
        else if (this == BusinessOwnershipStructure) onBusinessOwnershipStructure();
        else if (this == BusinessRegistration) onBusinessRegistration();
        else if (this == BusinessRegistrationDocument) onBusinessRegistrationDocument();
        else if (this == BusinessTaxExemptionStatusDocument) onBusinessTaxExemptionStatusDocument();
        else if (this == BusinessTaxIdDocument) onBusinessTaxIdDocument();
        else if (this == DeviceIdleImage) onDeviceIdleImage();
        else if (this == DigitalSignature) onDigitalSignature();
        else if (this == DriversLicenseBack) onDriversLicenseBack();
        else if (this == DriversLicenseFront) onDriversLicenseFront();
        else if (this == EnhancedDueDiligenceDocument) onEnhancedDueDiligenceDocument();
        else if (this == IdentificationCardBack) onIdentificationCardBack();
        else if (this == IdentificationCardFront) onIdentificationCardFront();
        else if (this == Other) onOther();
        else if (this == OwnerGovernmentIssuedPhotoId) onOwnerGovernmentIssuedPhotoId();
        else if (this == OwnerTaxIdDocument) onOwnerTaxIdDocument();
        else if (this == Passport) onPassport();
        else if (this == PciDocument) onPciDocument();
        else if (this == ProcessingStatement) onProcessingStatement();
        else if (this == ScreenRecording) onScreenRecording();
        else if (this == TaxDocument) onTaxDocument();
        else if (this == VideoDocument) onVideoDocument();
        else otherwise(Value);
    }
}
