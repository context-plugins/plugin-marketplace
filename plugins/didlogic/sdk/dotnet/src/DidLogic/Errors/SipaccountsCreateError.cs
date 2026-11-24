using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models.AnyOf;

namespace DidLogic.Errors;

public sealed class SipaccountsCreateError : ApiError
{
    private readonly Optional<ApiV1SipaccountsResponse11> _apiV1SipaccountsResponse11Value;

    private SipaccountsCreateError(Optional<ApiV1SipaccountsResponse11> apiV1SipaccountsResponse11Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SipaccountsResponse11Value = apiV1SipaccountsResponse11Value;
    }

    private static SipaccountsCreateError AsApiV1SipaccountsResponse11(ApiV1SipaccountsResponse11 value) =>
        new(Optional<ApiV1SipaccountsResponse11>.Some(value), default);

    private static SipaccountsCreateError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1SipaccountsResponse11([NotNullWhen(true)] out ApiV1SipaccountsResponse11? value) =>
        _apiV1SipaccountsResponse11Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SipaccountsResponse11, TResult> onApiV1SipaccountsResponse11,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SipaccountsResponse11(
                out var apiV1SipaccountsResponse11Value) => onApiV1SipaccountsResponse11(
                apiV1SipaccountsResponse11Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SipaccountsCreateError)} holds no value.")
        };

    public void Match(Action<ApiV1SipaccountsResponse11> onApiV1SipaccountsResponse11, Action<RawError> otherwise)
    {
        if (TryGetApiV1SipaccountsResponse11(out var apiV1SipaccountsResponse11Value)) onApiV1SipaccountsResponse11(
            apiV1SipaccountsResponse11Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SipaccountsCreateError)} holds no value.");
    }

    private static Task<SipaccountsCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1SipaccountsResponse11>().As(AsApiV1SipaccountsResponse11),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SipaccountsCreateError> Response { get; } = new(Create);
}
