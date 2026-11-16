using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// A code indicating the reason the verification request failed. Finix reserves the right to return enums that are not listed here.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OutcomeCode>))]
public sealed record OutcomeCode : OpenStringEnum<OutcomeCode>
{
    private OutcomeCode(string value) : base(value)
    {
    }

    public static readonly OutcomeCode BankStatementOneMonthRequested = new("BANK_STATEMENT_ONE_MONTH_REQUESTED");

    public static readonly OutcomeCode BankStatementThreeMonthsRequested = new("BANK_STATEMENT_THREE_MONTHS_REQUESTED");

    public static readonly OutcomeCode BusinessAddressDocumentRequested = new("BUSINESS_ADDRESS_DOCUMENT_REQUESTED");

    public static readonly OutcomeCode BusinessIncorporationDocumentRequested = new(
        "BUSINESS_INCORPORATION_DOCUMENT_REQUESTED");

    public static readonly OutcomeCode BusinessRegistrationDocumentRequested = new(
        "BUSINESS_REGISTRATION_DOCUMENT_REQUESTED");

    public static readonly OutcomeCode BusinessTaxExemptionStatusDocumentRequested = new(
        "BUSINESS_TAX_EXEMPTION_STATUS_DOCUMENT_REQUESTED");

    public static readonly OutcomeCode BusinessTaxIdDocumentRequested = new("BUSINESS_TAX_ID_DOCUMENT_REQUESTED");

    public static readonly OutcomeCode InvalidBankStatementOneMonth = new("INVALID_BANK_STATEMENT_ONE_MONTH");

    public static readonly OutcomeCode InvalidBankStatementThreeMonths = new("INVALID_BANK_STATEMENT_THREE_MONTHS");

    public static readonly OutcomeCode InvalidBusinessAddress = new("INVALID_BUSINESS_ADDRESS");

    public static readonly OutcomeCode InvalidBusinessAddressDocument = new("INVALID_BUSINESS_ADDRESS_DOCUMENT");

    public static readonly OutcomeCode InvalidBusinessDba = new("INVALID_BUSINESS_DBA");

    public static readonly OutcomeCode InvalidBusinessDescription = new("INVALID_BUSINESS_DESCRIPTION");

    public static readonly OutcomeCode InvalidBusinessIncorporationDate = new("INVALID_BUSINESS_INCORPORATION_DATE");

    public static readonly OutcomeCode InvalidBusinessIncorporationDocument = new(
        "INVALID_BUSINESS_INCORPORATION_DOCUMENT");

    public static readonly OutcomeCode InvalidBusinessMcc = new("INVALID_BUSINESS_MCC");

    public static readonly OutcomeCode InvalidBusinessName = new("INVALID_BUSINESS_NAME");

    public static readonly OutcomeCode InvalidBusinessOwnershipType = new("INVALID_BUSINESS_OWNERSHIP_TYPE");

    public static readonly OutcomeCode InvalidBusinessPhone = new("INVALID_BUSINESS_PHONE");

    public static readonly OutcomeCode InvalidBusinessRegistrationDocument = new(
        "INVALID_BUSINESS_REGISTRATION_DOCUMENT");

    public static readonly OutcomeCode InvalidBusinessTaxExemptionStatusDocument = new(
        "INVALID_BUSINESS_TAX_EXEMPTION_STATUS_DOCUMENT");

    public static readonly OutcomeCode InvalidBusinessTaxId = new("INVALID_BUSINESS_TAX_ID");

    public static readonly OutcomeCode InvalidBusinessTaxIdDocument = new("INVALID_BUSINESS_TAX_ID_DOCUMENT");

    public static readonly OutcomeCode InvalidBusinessType = new("INVALID_BUSINESS_TYPE");

    public static readonly OutcomeCode InvalidBusinessWebsite = new("INVALID_BUSINESS_WEBSITE");

    public static readonly OutcomeCode InvalidOwnerAddress = new("INVALID_OWNER_ADDRESS");

    public static readonly OutcomeCode InvalidOwnerBirthdate = new("INVALID_OWNER_BIRTHDATE");

    public static readonly OutcomeCode InvalidOwnerEmail = new("INVALID_OWNER_EMAIL");

    public static readonly OutcomeCode InvalidOwnerFirstName = new("INVALID_OWNER_FIRST_NAME");

    public static readonly OutcomeCode InvalidOwnerGovernmentIssuedPhotoId = new(
        "INVALID_OWNER_GOVERNMENT_ISSUED_PHOTO_ID");

    public static readonly OutcomeCode InvalidOwnerLastName = new("INVALID_OWNER_LAST_NAME");

    public static readonly OutcomeCode InvalidOwnerPhone = new("INVALID_OWNER_PHONE");

    public static readonly OutcomeCode InvalidOwnerTaxId = new("INVALID_OWNER_TAX_ID");

    public static readonly OutcomeCode InvalidOwnerTaxIdDocument = new("INVALID_OWNER_TAX_ID_DOCUMENT");

    public static readonly OutcomeCode InvalidOwnerTitle = new("INVALID_OWNER_TITLE");

    public static readonly OutcomeCode InvalidPaymentInstrumentAccountNumber = new(
        "INVALID_PAYMENT_INSTRUMENT_ACCOUNT_NUMBER");

    public static readonly OutcomeCode InvalidPaymentInstrumentBankCode = new("INVALID_PAYMENT_INSTRUMENT_BANK_CODE");

    public static readonly OutcomeCode InvalidPaymentInstrumentName = new("INVALID_PAYMENT_INSTRUMENT_NAME");

    public static readonly OutcomeCode OwnerGovernmentIssuedPhotoIdRequested = new(
        "OWNER_GOVERNMENT_ISSUED_PHOTO_ID_REQUESTED");

    public static readonly OutcomeCode OwnerTaxIdDocumentRequested = new("OWNER_TAX_ID_DOCUMENT_REQUESTED");

    public static readonly OutcomeCode ProcessingStatementRequested = new("PROCESSING_STATEMENT_REQUESTED");

    public TResult Match<TResult>(Func<TResult> onBankStatementOneMonthRequested,
        Func<TResult> onBankStatementThreeMonthsRequested,
        Func<TResult> onBusinessAddressDocumentRequested,
        Func<TResult> onBusinessIncorporationDocumentRequested,
        Func<TResult> onBusinessRegistrationDocumentRequested,
        Func<TResult> onBusinessTaxExemptionStatusDocumentRequested,
        Func<TResult> onBusinessTaxIdDocumentRequested,
        Func<TResult> onInvalidBankStatementOneMonth,
        Func<TResult> onInvalidBankStatementThreeMonths,
        Func<TResult> onInvalidBusinessAddress,
        Func<TResult> onInvalidBusinessAddressDocument,
        Func<TResult> onInvalidBusinessDba,
        Func<TResult> onInvalidBusinessDescription,
        Func<TResult> onInvalidBusinessIncorporationDate,
        Func<TResult> onInvalidBusinessIncorporationDocument,
        Func<TResult> onInvalidBusinessMcc,
        Func<TResult> onInvalidBusinessName,
        Func<TResult> onInvalidBusinessOwnershipType,
        Func<TResult> onInvalidBusinessPhone,
        Func<TResult> onInvalidBusinessRegistrationDocument,
        Func<TResult> onInvalidBusinessTaxExemptionStatusDocument,
        Func<TResult> onInvalidBusinessTaxId,
        Func<TResult> onInvalidBusinessTaxIdDocument,
        Func<TResult> onInvalidBusinessType,
        Func<TResult> onInvalidBusinessWebsite,
        Func<TResult> onInvalidOwnerAddress,
        Func<TResult> onInvalidOwnerBirthdate,
        Func<TResult> onInvalidOwnerEmail,
        Func<TResult> onInvalidOwnerFirstName,
        Func<TResult> onInvalidOwnerGovernmentIssuedPhotoId,
        Func<TResult> onInvalidOwnerLastName,
        Func<TResult> onInvalidOwnerPhone,
        Func<TResult> onInvalidOwnerTaxId,
        Func<TResult> onInvalidOwnerTaxIdDocument,
        Func<TResult> onInvalidOwnerTitle,
        Func<TResult> onInvalidPaymentInstrumentAccountNumber,
        Func<TResult> onInvalidPaymentInstrumentBankCode,
        Func<TResult> onInvalidPaymentInstrumentName,
        Func<TResult> onOwnerGovernmentIssuedPhotoIdRequested,
        Func<TResult> onOwnerTaxIdDocumentRequested,
        Func<TResult> onProcessingStatementRequested,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankStatementOneMonthRequested => onBankStatementOneMonthRequested(),
            _ when this == BankStatementThreeMonthsRequested => onBankStatementThreeMonthsRequested(),
            _ when this == BusinessAddressDocumentRequested => onBusinessAddressDocumentRequested(),
            _ when this == BusinessIncorporationDocumentRequested => onBusinessIncorporationDocumentRequested(),
            _ when this == BusinessRegistrationDocumentRequested => onBusinessRegistrationDocumentRequested(),
            _ when this ==
                BusinessTaxExemptionStatusDocumentRequested => onBusinessTaxExemptionStatusDocumentRequested(),
            _ when this == BusinessTaxIdDocumentRequested => onBusinessTaxIdDocumentRequested(),
            _ when this == InvalidBankStatementOneMonth => onInvalidBankStatementOneMonth(),
            _ when this == InvalidBankStatementThreeMonths => onInvalidBankStatementThreeMonths(),
            _ when this == InvalidBusinessAddress => onInvalidBusinessAddress(),
            _ when this == InvalidBusinessAddressDocument => onInvalidBusinessAddressDocument(),
            _ when this == InvalidBusinessDba => onInvalidBusinessDba(),
            _ when this == InvalidBusinessDescription => onInvalidBusinessDescription(),
            _ when this == InvalidBusinessIncorporationDate => onInvalidBusinessIncorporationDate(),
            _ when this == InvalidBusinessIncorporationDocument => onInvalidBusinessIncorporationDocument(),
            _ when this == InvalidBusinessMcc => onInvalidBusinessMcc(),
            _ when this == InvalidBusinessName => onInvalidBusinessName(),
            _ when this == InvalidBusinessOwnershipType => onInvalidBusinessOwnershipType(),
            _ when this == InvalidBusinessPhone => onInvalidBusinessPhone(),
            _ when this == InvalidBusinessRegistrationDocument => onInvalidBusinessRegistrationDocument(),
            _ when this == InvalidBusinessTaxExemptionStatusDocument => onInvalidBusinessTaxExemptionStatusDocument(),
            _ when this == InvalidBusinessTaxId => onInvalidBusinessTaxId(),
            _ when this == InvalidBusinessTaxIdDocument => onInvalidBusinessTaxIdDocument(),
            _ when this == InvalidBusinessType => onInvalidBusinessType(),
            _ when this == InvalidBusinessWebsite => onInvalidBusinessWebsite(),
            _ when this == InvalidOwnerAddress => onInvalidOwnerAddress(),
            _ when this == InvalidOwnerBirthdate => onInvalidOwnerBirthdate(),
            _ when this == InvalidOwnerEmail => onInvalidOwnerEmail(),
            _ when this == InvalidOwnerFirstName => onInvalidOwnerFirstName(),
            _ when this == InvalidOwnerGovernmentIssuedPhotoId => onInvalidOwnerGovernmentIssuedPhotoId(),
            _ when this == InvalidOwnerLastName => onInvalidOwnerLastName(),
            _ when this == InvalidOwnerPhone => onInvalidOwnerPhone(),
            _ when this == InvalidOwnerTaxId => onInvalidOwnerTaxId(),
            _ when this == InvalidOwnerTaxIdDocument => onInvalidOwnerTaxIdDocument(),
            _ when this == InvalidOwnerTitle => onInvalidOwnerTitle(),
            _ when this == InvalidPaymentInstrumentAccountNumber => onInvalidPaymentInstrumentAccountNumber(),
            _ when this == InvalidPaymentInstrumentBankCode => onInvalidPaymentInstrumentBankCode(),
            _ when this == InvalidPaymentInstrumentName => onInvalidPaymentInstrumentName(),
            _ when this == OwnerGovernmentIssuedPhotoIdRequested => onOwnerGovernmentIssuedPhotoIdRequested(),
            _ when this == OwnerTaxIdDocumentRequested => onOwnerTaxIdDocumentRequested(),
            _ when this == ProcessingStatementRequested => onProcessingStatementRequested(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankStatementOneMonthRequested,
        Action onBankStatementThreeMonthsRequested,
        Action onBusinessAddressDocumentRequested,
        Action onBusinessIncorporationDocumentRequested,
        Action onBusinessRegistrationDocumentRequested,
        Action onBusinessTaxExemptionStatusDocumentRequested,
        Action onBusinessTaxIdDocumentRequested,
        Action onInvalidBankStatementOneMonth,
        Action onInvalidBankStatementThreeMonths,
        Action onInvalidBusinessAddress,
        Action onInvalidBusinessAddressDocument,
        Action onInvalidBusinessDba,
        Action onInvalidBusinessDescription,
        Action onInvalidBusinessIncorporationDate,
        Action onInvalidBusinessIncorporationDocument,
        Action onInvalidBusinessMcc,
        Action onInvalidBusinessName,
        Action onInvalidBusinessOwnershipType,
        Action onInvalidBusinessPhone,
        Action onInvalidBusinessRegistrationDocument,
        Action onInvalidBusinessTaxExemptionStatusDocument,
        Action onInvalidBusinessTaxId,
        Action onInvalidBusinessTaxIdDocument,
        Action onInvalidBusinessType,
        Action onInvalidBusinessWebsite,
        Action onInvalidOwnerAddress,
        Action onInvalidOwnerBirthdate,
        Action onInvalidOwnerEmail,
        Action onInvalidOwnerFirstName,
        Action onInvalidOwnerGovernmentIssuedPhotoId,
        Action onInvalidOwnerLastName,
        Action onInvalidOwnerPhone,
        Action onInvalidOwnerTaxId,
        Action onInvalidOwnerTaxIdDocument,
        Action onInvalidOwnerTitle,
        Action onInvalidPaymentInstrumentAccountNumber,
        Action onInvalidPaymentInstrumentBankCode,
        Action onInvalidPaymentInstrumentName,
        Action onOwnerGovernmentIssuedPhotoIdRequested,
        Action onOwnerTaxIdDocumentRequested,
        Action onProcessingStatementRequested,
        Action<string> otherwise)
    {
        if (this == BankStatementOneMonthRequested) onBankStatementOneMonthRequested();
        else if (this == BankStatementThreeMonthsRequested) onBankStatementThreeMonthsRequested();
        else if (this == BusinessAddressDocumentRequested) onBusinessAddressDocumentRequested();
        else if (this == BusinessIncorporationDocumentRequested) onBusinessIncorporationDocumentRequested();
        else if (this == BusinessRegistrationDocumentRequested) onBusinessRegistrationDocumentRequested();
        else if (this == BusinessTaxExemptionStatusDocumentRequested) onBusinessTaxExemptionStatusDocumentRequested();
        else if (this == BusinessTaxIdDocumentRequested) onBusinessTaxIdDocumentRequested();
        else if (this == InvalidBankStatementOneMonth) onInvalidBankStatementOneMonth();
        else if (this == InvalidBankStatementThreeMonths) onInvalidBankStatementThreeMonths();
        else if (this == InvalidBusinessAddress) onInvalidBusinessAddress();
        else if (this == InvalidBusinessAddressDocument) onInvalidBusinessAddressDocument();
        else if (this == InvalidBusinessDba) onInvalidBusinessDba();
        else if (this == InvalidBusinessDescription) onInvalidBusinessDescription();
        else if (this == InvalidBusinessIncorporationDate) onInvalidBusinessIncorporationDate();
        else if (this == InvalidBusinessIncorporationDocument) onInvalidBusinessIncorporationDocument();
        else if (this == InvalidBusinessMcc) onInvalidBusinessMcc();
        else if (this == InvalidBusinessName) onInvalidBusinessName();
        else if (this == InvalidBusinessOwnershipType) onInvalidBusinessOwnershipType();
        else if (this == InvalidBusinessPhone) onInvalidBusinessPhone();
        else if (this == InvalidBusinessRegistrationDocument) onInvalidBusinessRegistrationDocument();
        else if (this == InvalidBusinessTaxExemptionStatusDocument) onInvalidBusinessTaxExemptionStatusDocument();
        else if (this == InvalidBusinessTaxId) onInvalidBusinessTaxId();
        else if (this == InvalidBusinessTaxIdDocument) onInvalidBusinessTaxIdDocument();
        else if (this == InvalidBusinessType) onInvalidBusinessType();
        else if (this == InvalidBusinessWebsite) onInvalidBusinessWebsite();
        else if (this == InvalidOwnerAddress) onInvalidOwnerAddress();
        else if (this == InvalidOwnerBirthdate) onInvalidOwnerBirthdate();
        else if (this == InvalidOwnerEmail) onInvalidOwnerEmail();
        else if (this == InvalidOwnerFirstName) onInvalidOwnerFirstName();
        else if (this == InvalidOwnerGovernmentIssuedPhotoId) onInvalidOwnerGovernmentIssuedPhotoId();
        else if (this == InvalidOwnerLastName) onInvalidOwnerLastName();
        else if (this == InvalidOwnerPhone) onInvalidOwnerPhone();
        else if (this == InvalidOwnerTaxId) onInvalidOwnerTaxId();
        else if (this == InvalidOwnerTaxIdDocument) onInvalidOwnerTaxIdDocument();
        else if (this == InvalidOwnerTitle) onInvalidOwnerTitle();
        else if (this == InvalidPaymentInstrumentAccountNumber) onInvalidPaymentInstrumentAccountNumber();
        else if (this == InvalidPaymentInstrumentBankCode) onInvalidPaymentInstrumentBankCode();
        else if (this == InvalidPaymentInstrumentName) onInvalidPaymentInstrumentName();
        else if (this == OwnerGovernmentIssuedPhotoIdRequested) onOwnerGovernmentIssuedPhotoIdRequested();
        else if (this == OwnerTaxIdDocumentRequested) onOwnerTaxIdDocumentRequested();
        else if (this == ProcessingStatementRequested) onProcessingStatementRequested();
        else otherwise(Value);
    }
}
