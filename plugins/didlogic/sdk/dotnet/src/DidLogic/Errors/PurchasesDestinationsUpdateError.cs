using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;
using DidLogic.Models.AnyOf;

namespace DidLogic.Errors;

public sealed class PurchasesDestinationsUpdateError : ApiError
{
    private readonly Optional<ApiV1PurchasesDestinations403Error1> _apiV1PurchasesDestinations403Error1Value;

    private readonly Optional<ApiV1PurchasesDestinationsResponse31> _apiV1PurchasesDestinationsResponse31Value;

    private PurchasesDestinationsUpdateError(Optional<ApiV1PurchasesDestinations403Error1> apiV1PurchasesDestinations403Error1Value,
        Optional<ApiV1PurchasesDestinationsResponse31> apiV1PurchasesDestinationsResponse31Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PurchasesDestinations403Error1Value = apiV1PurchasesDestinations403Error1Value;
        _apiV1PurchasesDestinationsResponse31Value = apiV1PurchasesDestinationsResponse31Value;
    }

    private static PurchasesDestinationsUpdateError AsApiV1PurchasesDestinations403Error1(ApiV1PurchasesDestinations403Error1 value) =>
        new(Optional<ApiV1PurchasesDestinations403Error1>.Some(value), default, default);

    private static PurchasesDestinationsUpdateError AsApiV1PurchasesDestinationsResponse31(ApiV1PurchasesDestinationsResponse31 value) =>
        new(default, Optional<ApiV1PurchasesDestinationsResponse31>.Some(value), default);

    private static PurchasesDestinationsUpdateError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1PurchasesDestinations403Error1([NotNullWhen(true)] out ApiV1PurchasesDestinations403Error1? value) =>
        _apiV1PurchasesDestinations403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PurchasesDestinationsResponse31([NotNullWhen(true)] out ApiV1PurchasesDestinationsResponse31? value) =>
        _apiV1PurchasesDestinationsResponse31Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PurchasesDestinations403Error1, TResult> onApiV1PurchasesDestinations403Error1,
        Func<ApiV1PurchasesDestinationsResponse31, TResult> onApiV1PurchasesDestinationsResponse31,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PurchasesDestinations403Error1(
                out var apiV1PurchasesDestinations403Error1Value) => onApiV1PurchasesDestinations403Error1(
                apiV1PurchasesDestinations403Error1Value),
            _ when TryGetApiV1PurchasesDestinationsResponse31(
                out var apiV1PurchasesDestinationsResponse31Value) => onApiV1PurchasesDestinationsResponse31(
                apiV1PurchasesDestinationsResponse31Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PurchasesDestinationsUpdateError)} holds no value.")
        };

    public void Match(Action<ApiV1PurchasesDestinations403Error1> onApiV1PurchasesDestinations403Error1,
        Action<ApiV1PurchasesDestinationsResponse31> onApiV1PurchasesDestinationsResponse31,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PurchasesDestinations403Error1(
            out var apiV1PurchasesDestinations403Error1Value)) onApiV1PurchasesDestinations403Error1(
            apiV1PurchasesDestinations403Error1Value);
        else if (TryGetApiV1PurchasesDestinationsResponse31(
            out var apiV1PurchasesDestinationsResponse31Value)) onApiV1PurchasesDestinationsResponse31(
            apiV1PurchasesDestinationsResponse31Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PurchasesDestinationsUpdateError)} holds no value.");
    }

    private static Task<PurchasesDestinationsUpdateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1PurchasesDestinations403Error1>().As(AsApiV1PurchasesDestinations403Error1),
            404 => response.Json<ApiV1PurchasesDestinationsResponse31>().As(AsApiV1PurchasesDestinationsResponse31),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PurchasesDestinationsUpdateError> Response { get; } = new(Create);
}
