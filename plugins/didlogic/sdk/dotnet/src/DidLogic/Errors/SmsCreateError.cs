using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;
using DidLogic.Models.AnyOf;

namespace DidLogic.Errors;

public sealed class SmsCreateError : ApiError
{
    private readonly Optional<ApiV1Sms403Error1> _apiV1Sms403Error1Value;

    private readonly Optional<ApiV1SmsResponse21> _apiV1SmsResponse21Value;

    private readonly Optional<Error> _errorValue;

    private SmsCreateError(Optional<ApiV1Sms403Error1> apiV1Sms403Error1Value,
        Optional<ApiV1SmsResponse21> apiV1SmsResponse21Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Sms403Error1Value = apiV1Sms403Error1Value;
        _apiV1SmsResponse21Value = apiV1SmsResponse21Value;
        _errorValue = errorValue;
    }

    private static SmsCreateError AsApiV1Sms403Error1(ApiV1Sms403Error1 value) =>
        new(Optional<ApiV1Sms403Error1>.Some(value), default, default, default);

    private static SmsCreateError AsApiV1SmsResponse21(ApiV1SmsResponse21 value) =>
        new(default, Optional<ApiV1SmsResponse21>.Some(value), default, default);

    private static SmsCreateError AsError(Error value) => new(default, default, Optional<Error>.Some(value), default);

    private static SmsCreateError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Sms403Error1([NotNullWhen(true)] out ApiV1Sms403Error1? value) =>
        _apiV1Sms403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SmsResponse21([NotNullWhen(true)] out ApiV1SmsResponse21? value) =>
        _apiV1SmsResponse21Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Sms403Error1, TResult> onApiV1Sms403Error1,
        Func<ApiV1SmsResponse21, TResult> onApiV1SmsResponse21,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Sms403Error1(out var apiV1Sms403Error1Value) => onApiV1Sms403Error1(
                apiV1Sms403Error1Value),
            _ when TryGetApiV1SmsResponse21(out var apiV1SmsResponse21Value) => onApiV1SmsResponse21(
                apiV1SmsResponse21Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SmsCreateError)} holds no value.")
        };

    public void Match(Action<ApiV1Sms403Error1> onApiV1Sms403Error1,
        Action<ApiV1SmsResponse21> onApiV1SmsResponse21,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Sms403Error1(out var apiV1Sms403Error1Value)) onApiV1Sms403Error1(apiV1Sms403Error1Value);
        else if (TryGetApiV1SmsResponse21(out var apiV1SmsResponse21Value)) onApiV1SmsResponse21(
            apiV1SmsResponse21Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SmsCreateError)} holds no value.");
    }

    private static Task<SmsCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error>().As(AsError),
            403 => response.Json<ApiV1Sms403Error1>().As(AsApiV1Sms403Error1),
            422 => response.Json<ApiV1SmsResponse21>().As(AsApiV1SmsResponse21),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SmsCreateError> Response { get; } = new(Create);
}
