using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// In case of failed job, displays error code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CodeConnectJobsApi>))]
public sealed record CodeConnectJobsApi : OpenStringEnum<CodeConnectJobsApi>
{
    private CodeConnectJobsApi(string value) : base(value)
    {
    }

    public static readonly CodeConnectJobsApi Success = new("success");

    public static readonly CodeConnectJobsApi UserActionRequired = new("user-action-required");

    public static readonly CodeConnectJobsApi SystemUnavailable = new("system-unavailable");

    public static readonly CodeConnectJobsApi Maintenance = new("maintenance");

    public static readonly CodeConnectJobsApi ConnectorError = new("connector-error");

    public static readonly CodeConnectJobsApi InstitutionNotFound = new("institution-not-found");

    public static readonly CodeConnectJobsApi InstitutionNotAvailable = new("institution-not-available");

    public static readonly CodeConnectJobsApi InstitutionDisabled = new("institution-disabled");

    public static readonly CodeConnectJobsApi MissingRequiredField = new("missing-required-field");

    public static readonly CodeConnectJobsApi MissingRequiredFieldValue = new("missing-required-field-value");

    public static readonly CodeConnectJobsApi InvalidFieldValue = new("invalid-field-value");

    public static readonly CodeConnectJobsApi InvalidCsvRow = new("invalid-csv-row");

    public static readonly CodeConnectJobsApi RowCountExceeded = new("row-count-exceeded");

    public static readonly CodeConnectJobsApi AccountDataDiffers = new("account-data-differs");

    public static readonly CodeConnectJobsApi EmptyFile = new("empty-file");

    public static readonly CodeConnectJobsApi BankStatementInvalid = new("bank-statement-invalid");

    public static readonly CodeConnectJobsApi BankStatementNewProduct = new("bank-statement-new-product");

    public static readonly CodeConnectJobsApi BankStatementParsingError = new("bank-statement-parsing-error");

    public static readonly CodeConnectJobsApi BankStatementNotSupported = new("bank-statement-not-supported");

    public static readonly CodeConnectJobsApi TxnAfterLastUpdatedDate = new("txn-after-last-updated-date");

    public static readonly CodeConnectJobsApi InvalidConnection = new("invalid-connection");

    public static readonly CodeConnectJobsApi UnknownError = new("unknown-error");

    public static readonly CodeConnectJobsApi JobTimedOut = new("job-timed-out");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onUserActionRequired,
        Func<TResult> onSystemUnavailable,
        Func<TResult> onMaintenance,
        Func<TResult> onConnectorError,
        Func<TResult> onInstitutionNotFound,
        Func<TResult> onInstitutionNotAvailable,
        Func<TResult> onInstitutionDisabled,
        Func<TResult> onMissingRequiredField,
        Func<TResult> onMissingRequiredFieldValue,
        Func<TResult> onInvalidFieldValue,
        Func<TResult> onInvalidCsvRow,
        Func<TResult> onRowCountExceeded,
        Func<TResult> onAccountDataDiffers,
        Func<TResult> onEmptyFile,
        Func<TResult> onBankStatementInvalid,
        Func<TResult> onBankStatementNewProduct,
        Func<TResult> onBankStatementParsingError,
        Func<TResult> onBankStatementNotSupported,
        Func<TResult> onTxnAfterLastUpdatedDate,
        Func<TResult> onInvalidConnection,
        Func<TResult> onUnknownError,
        Func<TResult> onJobTimedOut,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == UserActionRequired => onUserActionRequired(),
            _ when this == SystemUnavailable => onSystemUnavailable(),
            _ when this == Maintenance => onMaintenance(),
            _ when this == ConnectorError => onConnectorError(),
            _ when this == InstitutionNotFound => onInstitutionNotFound(),
            _ when this == InstitutionNotAvailable => onInstitutionNotAvailable(),
            _ when this == InstitutionDisabled => onInstitutionDisabled(),
            _ when this == MissingRequiredField => onMissingRequiredField(),
            _ when this == MissingRequiredFieldValue => onMissingRequiredFieldValue(),
            _ when this == InvalidFieldValue => onInvalidFieldValue(),
            _ when this == InvalidCsvRow => onInvalidCsvRow(),
            _ when this == RowCountExceeded => onRowCountExceeded(),
            _ when this == AccountDataDiffers => onAccountDataDiffers(),
            _ when this == EmptyFile => onEmptyFile(),
            _ when this == BankStatementInvalid => onBankStatementInvalid(),
            _ when this == BankStatementNewProduct => onBankStatementNewProduct(),
            _ when this == BankStatementParsingError => onBankStatementParsingError(),
            _ when this == BankStatementNotSupported => onBankStatementNotSupported(),
            _ when this == TxnAfterLastUpdatedDate => onTxnAfterLastUpdatedDate(),
            _ when this == InvalidConnection => onInvalidConnection(),
            _ when this == UnknownError => onUnknownError(),
            _ when this == JobTimedOut => onJobTimedOut(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess,
        Action onUserActionRequired,
        Action onSystemUnavailable,
        Action onMaintenance,
        Action onConnectorError,
        Action onInstitutionNotFound,
        Action onInstitutionNotAvailable,
        Action onInstitutionDisabled,
        Action onMissingRequiredField,
        Action onMissingRequiredFieldValue,
        Action onInvalidFieldValue,
        Action onInvalidCsvRow,
        Action onRowCountExceeded,
        Action onAccountDataDiffers,
        Action onEmptyFile,
        Action onBankStatementInvalid,
        Action onBankStatementNewProduct,
        Action onBankStatementParsingError,
        Action onBankStatementNotSupported,
        Action onTxnAfterLastUpdatedDate,
        Action onInvalidConnection,
        Action onUnknownError,
        Action onJobTimedOut,
        Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == UserActionRequired) onUserActionRequired();
        else if (this == SystemUnavailable) onSystemUnavailable();
        else if (this == Maintenance) onMaintenance();
        else if (this == ConnectorError) onConnectorError();
        else if (this == InstitutionNotFound) onInstitutionNotFound();
        else if (this == InstitutionNotAvailable) onInstitutionNotAvailable();
        else if (this == InstitutionDisabled) onInstitutionDisabled();
        else if (this == MissingRequiredField) onMissingRequiredField();
        else if (this == MissingRequiredFieldValue) onMissingRequiredFieldValue();
        else if (this == InvalidFieldValue) onInvalidFieldValue();
        else if (this == InvalidCsvRow) onInvalidCsvRow();
        else if (this == RowCountExceeded) onRowCountExceeded();
        else if (this == AccountDataDiffers) onAccountDataDiffers();
        else if (this == EmptyFile) onEmptyFile();
        else if (this == BankStatementInvalid) onBankStatementInvalid();
        else if (this == BankStatementNewProduct) onBankStatementNewProduct();
        else if (this == BankStatementParsingError) onBankStatementParsingError();
        else if (this == BankStatementNotSupported) onBankStatementNotSupported();
        else if (this == TxnAfterLastUpdatedDate) onTxnAfterLastUpdatedDate();
        else if (this == InvalidConnection) onInvalidConnection();
        else if (this == UnknownError) onUnknownError();
        else if (this == JobTimedOut) onJobTimedOut();
        else otherwise(Value);
    }
}
