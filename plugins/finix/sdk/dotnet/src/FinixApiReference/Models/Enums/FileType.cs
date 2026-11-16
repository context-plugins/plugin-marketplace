using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of file that needs to be uploaded. Returned when <c>type</c> is <c>FILE_UPLOAD</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FileType>))]
public sealed record FileType : OpenStringEnum<FileType>
{
    private FileType(string value) : base(value)
    {
    }

    public static readonly FileType BankStatementOneMonth = new("BANK_STATEMENT_ONE_MONTH");

    public static readonly FileType BankStatementThreeMonths = new("BANK_STATEMENT_THREE_MONTHS");

    public static readonly FileType BusinessAddressDocument = new("BUSINESS_ADDRESS_DOCUMENT");

    public static readonly FileType BusinessIncorporationDocument = new("BUSINESS_INCORPORATION_DOCUMENT");

    public static readonly FileType BusinessRegistrationDocument = new("BUSINESS_REGISTRATION_DOCUMENT");

    public static readonly FileType BusinessTaxExemptionStatusDocument = new("BUSINESS_TAX_EXEMPTION_STATUS_DOCUMENT");

    public static readonly FileType BusinessTaxIdDocument = new("BUSINESS_TAX_ID_DOCUMENT");

    public static readonly FileType OwnerGovernmentIssuedPhotoId = new("OWNER_GOVERNMENT_ISSUED_PHOTO_ID");

    public static readonly FileType OwnerTaxIdDocument = new("OWNER_TAX_ID_DOCUMENT");

    public static readonly FileType ProcessingStatement = new("PROCESSING_STATEMENT");

    public TResult Match<TResult>(Func<TResult> onBankStatementOneMonth,
        Func<TResult> onBankStatementThreeMonths,
        Func<TResult> onBusinessAddressDocument,
        Func<TResult> onBusinessIncorporationDocument,
        Func<TResult> onBusinessRegistrationDocument,
        Func<TResult> onBusinessTaxExemptionStatusDocument,
        Func<TResult> onBusinessTaxIdDocument,
        Func<TResult> onOwnerGovernmentIssuedPhotoId,
        Func<TResult> onOwnerTaxIdDocument,
        Func<TResult> onProcessingStatement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankStatementOneMonth => onBankStatementOneMonth(),
            _ when this == BankStatementThreeMonths => onBankStatementThreeMonths(),
            _ when this == BusinessAddressDocument => onBusinessAddressDocument(),
            _ when this == BusinessIncorporationDocument => onBusinessIncorporationDocument(),
            _ when this == BusinessRegistrationDocument => onBusinessRegistrationDocument(),
            _ when this == BusinessTaxExemptionStatusDocument => onBusinessTaxExemptionStatusDocument(),
            _ when this == BusinessTaxIdDocument => onBusinessTaxIdDocument(),
            _ when this == OwnerGovernmentIssuedPhotoId => onOwnerGovernmentIssuedPhotoId(),
            _ when this == OwnerTaxIdDocument => onOwnerTaxIdDocument(),
            _ when this == ProcessingStatement => onProcessingStatement(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankStatementOneMonth,
        Action onBankStatementThreeMonths,
        Action onBusinessAddressDocument,
        Action onBusinessIncorporationDocument,
        Action onBusinessRegistrationDocument,
        Action onBusinessTaxExemptionStatusDocument,
        Action onBusinessTaxIdDocument,
        Action onOwnerGovernmentIssuedPhotoId,
        Action onOwnerTaxIdDocument,
        Action onProcessingStatement,
        Action<string> otherwise)
    {
        if (this == BankStatementOneMonth) onBankStatementOneMonth();
        else if (this == BankStatementThreeMonths) onBankStatementThreeMonths();
        else if (this == BusinessAddressDocument) onBusinessAddressDocument();
        else if (this == BusinessIncorporationDocument) onBusinessIncorporationDocument();
        else if (this == BusinessRegistrationDocument) onBusinessRegistrationDocument();
        else if (this == BusinessTaxExemptionStatusDocument) onBusinessTaxExemptionStatusDocument();
        else if (this == BusinessTaxIdDocument) onBusinessTaxIdDocument();
        else if (this == OwnerGovernmentIssuedPhotoId) onOwnerGovernmentIssuedPhotoId();
        else if (this == OwnerTaxIdDocument) onOwnerTaxIdDocument();
        else if (this == ProcessingStatement) onProcessingStatement();
        else otherwise(Value);
    }
}
