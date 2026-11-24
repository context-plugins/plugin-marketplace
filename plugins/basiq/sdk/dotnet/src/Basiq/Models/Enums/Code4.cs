using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Application-specific error code, expressed as a string value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code4>))]
public sealed record Code4 : OpenStringEnum<Code4>
{
    private Code4(string value) : base(value)
    {
    }

    public static readonly Code4 ParameterNotSupplied = new("parameter-not-supplied");

    public static readonly Code4 ParameterNotValid = new("parameter-not-valid");

    public static readonly Code4 InvalidCredentials = new("invalid-credentials");

    public static readonly Code4 ServiceUnavailable = new("service-unavailable");

    public static readonly Code4 JobTimedOut = new("job-timed-out");

    public static readonly Code4 AccountNotAccessibleRequiresUserAction = new(
        "account-not-accessible-requires-user-action");

    public static readonly Code4 ResourceNotFound = new("resource-not-found");

    public static readonly Code4 TemporaryUnavailable = new("temporary-unavailable");

    public static readonly Code4 MaintenanceError = new("maintenance-error");

    public static readonly Code4 RowCountExceeded = new("row-count-exceeded");

    public static readonly Code4 EmptyFile = new("empty-file");

    public static readonly Code4 BankStatementInvalid = new("bank-statement-invalid");

    public static readonly Code4 BankStatementNewProduct = new("bank-statement-new-product");

    public static readonly Code4 BankStatementParsingError = new("bank-statement-parsing-error");

    public static readonly Code4 BankStatementNotSupported = new("bank-statement-not-supported");

    public static readonly Code4 StatementNotAvailable = new("statement-not-available");

    public static readonly Code4 TemporaryUnavailableQueued = new("temporary-unavailable-queued");

    public static readonly Code4 JobInvalidated = new("job-invalidated");

    public static readonly Code4 AuthorizationFailed = new("authorization-failed");

    public static readonly Code4 InvalidCsvRow = new("invalid-csv-row");

    public static readonly Code4 InvalidFieldValue = new("invalid-field-value");

    public static readonly Code4 MissingRequiredField = new("missing-required-field");

    public static readonly Code4 MissingRequiredFieldValue = new("missing-required-field-value");

    public static readonly Code4 AccountDataDiffers = new("account-data-differs");

    public TResult Match<TResult>(Func<TResult> onParameterNotSupplied,
        Func<TResult> onParameterNotValid,
        Func<TResult> onInvalidCredentials,
        Func<TResult> onServiceUnavailable,
        Func<TResult> onJobTimedOut,
        Func<TResult> onAccountNotAccessibleRequiresUserAction,
        Func<TResult> onResourceNotFound,
        Func<TResult> onTemporaryUnavailable,
        Func<TResult> onMaintenanceError,
        Func<TResult> onRowCountExceeded,
        Func<TResult> onEmptyFile,
        Func<TResult> onBankStatementInvalid,
        Func<TResult> onBankStatementNewProduct,
        Func<TResult> onBankStatementParsingError,
        Func<TResult> onBankStatementNotSupported,
        Func<TResult> onStatementNotAvailable,
        Func<TResult> onTemporaryUnavailableQueued,
        Func<TResult> onJobInvalidated,
        Func<TResult> onAuthorizationFailed,
        Func<TResult> onInvalidCsvRow,
        Func<TResult> onInvalidFieldValue,
        Func<TResult> onMissingRequiredField,
        Func<TResult> onMissingRequiredFieldValue,
        Func<TResult> onAccountDataDiffers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ParameterNotSupplied => onParameterNotSupplied(),
            _ when this == ParameterNotValid => onParameterNotValid(),
            _ when this == InvalidCredentials => onInvalidCredentials(),
            _ when this == ServiceUnavailable => onServiceUnavailable(),
            _ when this == JobTimedOut => onJobTimedOut(),
            _ when this == AccountNotAccessibleRequiresUserAction => onAccountNotAccessibleRequiresUserAction(),
            _ when this == ResourceNotFound => onResourceNotFound(),
            _ when this == TemporaryUnavailable => onTemporaryUnavailable(),
            _ when this == MaintenanceError => onMaintenanceError(),
            _ when this == RowCountExceeded => onRowCountExceeded(),
            _ when this == EmptyFile => onEmptyFile(),
            _ when this == BankStatementInvalid => onBankStatementInvalid(),
            _ when this == BankStatementNewProduct => onBankStatementNewProduct(),
            _ when this == BankStatementParsingError => onBankStatementParsingError(),
            _ when this == BankStatementNotSupported => onBankStatementNotSupported(),
            _ when this == StatementNotAvailable => onStatementNotAvailable(),
            _ when this == TemporaryUnavailableQueued => onTemporaryUnavailableQueued(),
            _ when this == JobInvalidated => onJobInvalidated(),
            _ when this == AuthorizationFailed => onAuthorizationFailed(),
            _ when this == InvalidCsvRow => onInvalidCsvRow(),
            _ when this == InvalidFieldValue => onInvalidFieldValue(),
            _ when this == MissingRequiredField => onMissingRequiredField(),
            _ when this == MissingRequiredFieldValue => onMissingRequiredFieldValue(),
            _ when this == AccountDataDiffers => onAccountDataDiffers(),
            _ => otherwise(Value)
        };

    public void Match(Action onParameterNotSupplied,
        Action onParameterNotValid,
        Action onInvalidCredentials,
        Action onServiceUnavailable,
        Action onJobTimedOut,
        Action onAccountNotAccessibleRequiresUserAction,
        Action onResourceNotFound,
        Action onTemporaryUnavailable,
        Action onMaintenanceError,
        Action onRowCountExceeded,
        Action onEmptyFile,
        Action onBankStatementInvalid,
        Action onBankStatementNewProduct,
        Action onBankStatementParsingError,
        Action onBankStatementNotSupported,
        Action onStatementNotAvailable,
        Action onTemporaryUnavailableQueued,
        Action onJobInvalidated,
        Action onAuthorizationFailed,
        Action onInvalidCsvRow,
        Action onInvalidFieldValue,
        Action onMissingRequiredField,
        Action onMissingRequiredFieldValue,
        Action onAccountDataDiffers,
        Action<string> otherwise)
    {
        if (this == ParameterNotSupplied) onParameterNotSupplied();
        else if (this == ParameterNotValid) onParameterNotValid();
        else if (this == InvalidCredentials) onInvalidCredentials();
        else if (this == ServiceUnavailable) onServiceUnavailable();
        else if (this == JobTimedOut) onJobTimedOut();
        else if (this == AccountNotAccessibleRequiresUserAction) onAccountNotAccessibleRequiresUserAction();
        else if (this == ResourceNotFound) onResourceNotFound();
        else if (this == TemporaryUnavailable) onTemporaryUnavailable();
        else if (this == MaintenanceError) onMaintenanceError();
        else if (this == RowCountExceeded) onRowCountExceeded();
        else if (this == EmptyFile) onEmptyFile();
        else if (this == BankStatementInvalid) onBankStatementInvalid();
        else if (this == BankStatementNewProduct) onBankStatementNewProduct();
        else if (this == BankStatementParsingError) onBankStatementParsingError();
        else if (this == BankStatementNotSupported) onBankStatementNotSupported();
        else if (this == StatementNotAvailable) onStatementNotAvailable();
        else if (this == TemporaryUnavailableQueued) onTemporaryUnavailableQueued();
        else if (this == JobInvalidated) onJobInvalidated();
        else if (this == AuthorizationFailed) onAuthorizationFailed();
        else if (this == InvalidCsvRow) onInvalidCsvRow();
        else if (this == InvalidFieldValue) onInvalidFieldValue();
        else if (this == MissingRequiredField) onMissingRequiredField();
        else if (this == MissingRequiredFieldValue) onMissingRequiredFieldValue();
        else if (this == AccountDataDiffers) onAccountDataDiffers();
        else otherwise(Value);
    }
}
