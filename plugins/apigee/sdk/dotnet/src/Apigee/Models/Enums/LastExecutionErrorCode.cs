using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The error code of the last execution of the curation. The error code is populated only when the last execution state is failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LastExecutionErrorCode>))]
public sealed record LastExecutionErrorCode : OpenStringEnum<LastExecutionErrorCode>
{
    private LastExecutionErrorCode(string value) : base(value)
    {
    }

    public static readonly LastExecutionErrorCode ErrorCodeUnspecified = new("ERROR_CODE_UNSPECIFIED");

    public static readonly LastExecutionErrorCode InternalError = new("INTERNAL_ERROR");

    public static readonly LastExecutionErrorCode Unauthorized = new("UNAUTHORIZED");

    public TResult Match<TResult>(Func<TResult> onErrorCodeUnspecified,
        Func<TResult> onInternalError,
        Func<TResult> onUnauthorized,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ErrorCodeUnspecified => onErrorCodeUnspecified(),
            _ when this == InternalError => onInternalError(),
            _ when this == Unauthorized => onUnauthorized(),
            _ => otherwise(Value)
        };

    public void Match(Action onErrorCodeUnspecified,
        Action onInternalError,
        Action onUnauthorized,
        Action<string> otherwise)
    {
        if (this == ErrorCodeUnspecified) onErrorCodeUnspecified();
        else if (this == InternalError) onInternalError();
        else if (this == Unauthorized) onUnauthorized();
        else otherwise(Value);
    }
}
