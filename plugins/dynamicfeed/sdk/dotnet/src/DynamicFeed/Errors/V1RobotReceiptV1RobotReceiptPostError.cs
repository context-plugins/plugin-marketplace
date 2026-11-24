using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DynamicFeed.Core.ErrorResponse;
using DynamicFeed.Core.Models;
using DynamicFeed.Models;

namespace DynamicFeed.Errors;

public sealed class V1RobotReceiptV1RobotReceiptPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private V1RobotReceiptV1RobotReceiptPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
    }

    private static V1RobotReceiptV1RobotReceiptPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default);

    private static V1RobotReceiptV1RobotReceiptPostError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(V1RobotReceiptV1RobotReceiptPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError, Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(V1RobotReceiptV1RobotReceiptPostError)} holds no value.");
    }

    private static Task<V1RobotReceiptV1RobotReceiptPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<V1RobotReceiptV1RobotReceiptPostError> Response { get; } = new(Create);
}
