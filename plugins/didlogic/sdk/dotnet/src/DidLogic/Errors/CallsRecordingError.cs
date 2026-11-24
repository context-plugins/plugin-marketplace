using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;
using DidLogic.Models.AnyOf;

namespace DidLogic.Errors;

public sealed class CallsRecordingError : ApiError
{
    private readonly Optional<ApiV1CallsRecordingResponse1> _apiV1CallsRecordingResponse1Value;

    private readonly Optional<Error> _errorValue;

    private CallsRecordingError(Optional<ApiV1CallsRecordingResponse1> apiV1CallsRecordingResponse1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1CallsRecordingResponse1Value = apiV1CallsRecordingResponse1Value;
        _errorValue = errorValue;
    }

    private static CallsRecordingError AsApiV1CallsRecordingResponse1(ApiV1CallsRecordingResponse1 value) =>
        new(Optional<ApiV1CallsRecordingResponse1>.Some(value), default, default);

    private static CallsRecordingError AsError(Error value) => new(default, Optional<Error>.Some(value), default);

    private static CallsRecordingError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1CallsRecordingResponse1([NotNullWhen(true)] out ApiV1CallsRecordingResponse1? value) =>
        _apiV1CallsRecordingResponse1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1CallsRecordingResponse1, TResult> onApiV1CallsRecordingResponse1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CallsRecordingResponse1(
                out var apiV1CallsRecordingResponse1Value) => onApiV1CallsRecordingResponse1(
                apiV1CallsRecordingResponse1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CallsRecordingError)} holds no value.")
        };

    public void Match(Action<ApiV1CallsRecordingResponse1> onApiV1CallsRecordingResponse1,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1CallsRecordingResponse1(
            out var apiV1CallsRecordingResponse1Value)) onApiV1CallsRecordingResponse1(
            apiV1CallsRecordingResponse1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CallsRecordingError)} holds no value.");
    }

    private static Task<CallsRecordingError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1CallsRecordingResponse1>().As(AsApiV1CallsRecordingResponse1),
            404 or 429 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CallsRecordingError> Response { get; } = new(Create);
}
