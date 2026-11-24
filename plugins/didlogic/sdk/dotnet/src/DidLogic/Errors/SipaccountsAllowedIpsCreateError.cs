using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class SipaccountsAllowedIpsCreateError : ApiError
{
    private readonly Optional<ApiV1SipaccountsAllowedIps403Error1> _apiV1SipaccountsAllowedIps403Error1Value;

    private readonly Optional<Error> _errorValue;

    private SipaccountsAllowedIpsCreateError(Optional<ApiV1SipaccountsAllowedIps403Error1> apiV1SipaccountsAllowedIps403Error1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SipaccountsAllowedIps403Error1Value = apiV1SipaccountsAllowedIps403Error1Value;
        _errorValue = errorValue;
    }

    private static SipaccountsAllowedIpsCreateError AsApiV1SipaccountsAllowedIps403Error1(ApiV1SipaccountsAllowedIps403Error1 value) =>
        new(Optional<ApiV1SipaccountsAllowedIps403Error1>.Some(value), default, default);

    private static SipaccountsAllowedIpsCreateError AsError(Error value) =>
        new(default, Optional<Error>.Some(value), default);

    private static SipaccountsAllowedIpsCreateError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1SipaccountsAllowedIps403Error1([NotNullWhen(true)] out ApiV1SipaccountsAllowedIps403Error1? value) =>
        _apiV1SipaccountsAllowedIps403Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SipaccountsAllowedIps403Error1, TResult> onApiV1SipaccountsAllowedIps403Error1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SipaccountsAllowedIps403Error1(
                out var apiV1SipaccountsAllowedIps403Error1Value) => onApiV1SipaccountsAllowedIps403Error1(
                apiV1SipaccountsAllowedIps403Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SipaccountsAllowedIpsCreateError)} holds no value.")
        };

    public void Match(Action<ApiV1SipaccountsAllowedIps403Error1> onApiV1SipaccountsAllowedIps403Error1,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SipaccountsAllowedIps403Error1(
            out var apiV1SipaccountsAllowedIps403Error1Value)) onApiV1SipaccountsAllowedIps403Error1(
            apiV1SipaccountsAllowedIps403Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SipaccountsAllowedIpsCreateError)} holds no value.");
    }

    private static Task<SipaccountsAllowedIpsCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1SipaccountsAllowedIps403Error1>().As(AsApiV1SipaccountsAllowedIps403Error1),
            404 or 422 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SipaccountsAllowedIpsCreateError> Response { get; } = new(Create);
}
