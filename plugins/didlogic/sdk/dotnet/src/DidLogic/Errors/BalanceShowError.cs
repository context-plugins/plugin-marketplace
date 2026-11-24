using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class BalanceShowError : ApiError
{
    private readonly Optional<ApiV1Balance403Error1> _apiV1Balance403Error1Value;

    private BalanceShowError(Optional<ApiV1Balance403Error1> apiV1Balance403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Balance403Error1Value = apiV1Balance403Error1Value;
    }

    private static BalanceShowError AsApiV1Balance403Error1(ApiV1Balance403Error1 value) =>
        new(Optional<ApiV1Balance403Error1>.Some(value), default);

    private static BalanceShowError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Balance403Error1([NotNullWhen(true)] out ApiV1Balance403Error1? value) =>
        _apiV1Balance403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Balance403Error1, TResult> onApiV1Balance403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Balance403Error1(out var apiV1Balance403Error1Value) => onApiV1Balance403Error1(
                apiV1Balance403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(BalanceShowError)} holds no value.")
        };

    public void Match(Action<ApiV1Balance403Error1> onApiV1Balance403Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV1Balance403Error1(out var apiV1Balance403Error1Value)) onApiV1Balance403Error1(
            apiV1Balance403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(BalanceShowError)} holds no value.");
    }

    private static Task<BalanceShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1Balance403Error1>().As(AsApiV1Balance403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<BalanceShowError> Response { get; } = new(Create);
}
