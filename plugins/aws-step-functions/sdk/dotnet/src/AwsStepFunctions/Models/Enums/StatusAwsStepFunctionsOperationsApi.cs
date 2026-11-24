using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The execution status of the state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAwsStepFunctionsOperationsApi>))]
public sealed record StatusAwsStepFunctionsOperationsApi : OpenStringEnum<StatusAwsStepFunctionsOperationsApi>
{
    private StatusAwsStepFunctionsOperationsApi(string value) : base(value)
    {
    }

    public static readonly StatusAwsStepFunctionsOperationsApi Succeeded = new("SUCCEEDED");

    public static readonly StatusAwsStepFunctionsOperationsApi Failed = new("FAILED");

    public static readonly StatusAwsStepFunctionsOperationsApi Retriable = new("RETRIABLE");

    public static readonly StatusAwsStepFunctionsOperationsApi CaughtError = new("CAUGHT_ERROR");

    public TResult Match<TResult>(Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onRetriable,
        Func<TResult> onCaughtError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Retriable => onRetriable(),
            _ when this == CaughtError => onCaughtError(),
            _ => otherwise(Value)
        };

    public void Match(Action onSucceeded,
        Action onFailed,
        Action onRetriable,
        Action onCaughtError,
        Action<string> otherwise)
    {
        if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Retriable) onRetriable();
        else if (this == CaughtError) onCaughtError();
        else otherwise(Value);
    }
}
