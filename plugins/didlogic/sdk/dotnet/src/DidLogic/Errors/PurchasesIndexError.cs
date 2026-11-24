using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class PurchasesIndexError : ApiError
{
    private readonly Optional<ApiV1Purchases403Error1> _apiV1Purchases403Error1Value;

    private PurchasesIndexError(Optional<ApiV1Purchases403Error1> apiV1Purchases403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Purchases403Error1Value = apiV1Purchases403Error1Value;
    }

    private static PurchasesIndexError AsApiV1Purchases403Error1(ApiV1Purchases403Error1 value) =>
        new(Optional<ApiV1Purchases403Error1>.Some(value), default);

    private static PurchasesIndexError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Purchases403Error1([NotNullWhen(true)] out ApiV1Purchases403Error1? value) =>
        _apiV1Purchases403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Purchases403Error1, TResult> onApiV1Purchases403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Purchases403Error1(out var apiV1Purchases403Error1Value) => onApiV1Purchases403Error1(
                apiV1Purchases403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PurchasesIndexError)} holds no value.")
        };

    public void Match(Action<ApiV1Purchases403Error1> onApiV1Purchases403Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV1Purchases403Error1(out var apiV1Purchases403Error1Value)) onApiV1Purchases403Error1(
            apiV1Purchases403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PurchasesIndexError)} holds no value.");
    }

    private static Task<PurchasesIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1Purchases403Error1>().As(AsApiV1Purchases403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PurchasesIndexError> Response { get; } = new(Create);
}
