using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The reason the validation exception was thrown.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason UnknownOperation = new("UNKNOWN_OPERATION");

    public static readonly Reason CannotParse = new("CANNOT_PARSE");

    public static readonly Reason FieldValidationFailed = new("FIELD_VALIDATION_FAILED");

    public static readonly Reason Other = new("OTHER");

    public static readonly Reason InvalidParameterCombination = new("INVALID_PARAMETER_COMBINATION");

    public static readonly Reason ParameterInconsistentWithServiceState = new(
        "PARAMETER_INCONSISTENT_WITH_SERVICE_STATE");

    public TResult Match<TResult>(Func<TResult> onUnknownOperation,
        Func<TResult> onCannotParse,
        Func<TResult> onFieldValidationFailed,
        Func<TResult> onOther,
        Func<TResult> onInvalidParameterCombination,
        Func<TResult> onParameterInconsistentWithServiceState,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UnknownOperation => onUnknownOperation(),
            _ when this == CannotParse => onCannotParse(),
            _ when this == FieldValidationFailed => onFieldValidationFailed(),
            _ when this == Other => onOther(),
            _ when this == InvalidParameterCombination => onInvalidParameterCombination(),
            _ when this == ParameterInconsistentWithServiceState => onParameterInconsistentWithServiceState(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknownOperation,
        Action onCannotParse,
        Action onFieldValidationFailed,
        Action onOther,
        Action onInvalidParameterCombination,
        Action onParameterInconsistentWithServiceState,
        Action<string> otherwise)
    {
        if (this == UnknownOperation) onUnknownOperation();
        else if (this == CannotParse) onCannotParse();
        else if (this == FieldValidationFailed) onFieldValidationFailed();
        else if (this == Other) onOther();
        else if (this == InvalidParameterCombination) onInvalidParameterCombination();
        else if (this == ParameterInconsistentWithServiceState) onParameterInconsistentWithServiceState();
        else otherwise(Value);
    }
}
