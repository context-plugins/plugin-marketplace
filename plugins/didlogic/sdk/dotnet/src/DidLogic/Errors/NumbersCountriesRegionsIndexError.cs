using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class NumbersCountriesRegionsIndexError : ApiError
{
    private readonly Optional<ApiV2NumbersCountriesRegions401Error1> _apiV2NumbersCountriesRegions401Error1Value;

    private readonly Optional<ApiV2NumbersCountriesRegions403Error1> _apiV2NumbersCountriesRegions403Error1Value;

    private readonly Optional<ApiV2NumbersCountriesRegions404Error1> _apiV2NumbersCountriesRegions404Error1Value;

    private NumbersCountriesRegionsIndexError(Optional<ApiV2NumbersCountriesRegions401Error1> apiV2NumbersCountriesRegions401Error1Value,
        Optional<ApiV2NumbersCountriesRegions403Error1> apiV2NumbersCountriesRegions403Error1Value,
        Optional<ApiV2NumbersCountriesRegions404Error1> apiV2NumbersCountriesRegions404Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersCountriesRegions401Error1Value = apiV2NumbersCountriesRegions401Error1Value;
        _apiV2NumbersCountriesRegions403Error1Value = apiV2NumbersCountriesRegions403Error1Value;
        _apiV2NumbersCountriesRegions404Error1Value = apiV2NumbersCountriesRegions404Error1Value;
    }

    private static NumbersCountriesRegionsIndexError AsApiV2NumbersCountriesRegions401Error1(ApiV2NumbersCountriesRegions401Error1 value) =>
        new(Optional<ApiV2NumbersCountriesRegions401Error1>.Some(value), default, default, default);

    private static NumbersCountriesRegionsIndexError AsApiV2NumbersCountriesRegions403Error1(ApiV2NumbersCountriesRegions403Error1 value) =>
        new(default, Optional<ApiV2NumbersCountriesRegions403Error1>.Some(value), default, default);

    private static NumbersCountriesRegionsIndexError AsApiV2NumbersCountriesRegions404Error1(ApiV2NumbersCountriesRegions404Error1 value) =>
        new(default, default, Optional<ApiV2NumbersCountriesRegions404Error1>.Some(value), default);

    private static NumbersCountriesRegionsIndexError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersCountriesRegions401Error1([NotNullWhen(true)] out ApiV2NumbersCountriesRegions401Error1? value) =>
        _apiV2NumbersCountriesRegions401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersCountriesRegions403Error1([NotNullWhen(true)] out ApiV2NumbersCountriesRegions403Error1? value) =>
        _apiV2NumbersCountriesRegions403Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersCountriesRegions404Error1([NotNullWhen(true)] out ApiV2NumbersCountriesRegions404Error1? value) =>
        _apiV2NumbersCountriesRegions404Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersCountriesRegions401Error1, TResult> onApiV2NumbersCountriesRegions401Error1,
        Func<ApiV2NumbersCountriesRegions403Error1, TResult> onApiV2NumbersCountriesRegions403Error1,
        Func<ApiV2NumbersCountriesRegions404Error1, TResult> onApiV2NumbersCountriesRegions404Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersCountriesRegions401Error1(
                out var apiV2NumbersCountriesRegions401Error1Value) => onApiV2NumbersCountriesRegions401Error1(
                apiV2NumbersCountriesRegions401Error1Value),
            _ when TryGetApiV2NumbersCountriesRegions403Error1(
                out var apiV2NumbersCountriesRegions403Error1Value) => onApiV2NumbersCountriesRegions403Error1(
                apiV2NumbersCountriesRegions403Error1Value),
            _ when TryGetApiV2NumbersCountriesRegions404Error1(
                out var apiV2NumbersCountriesRegions404Error1Value) => onApiV2NumbersCountriesRegions404Error1(
                apiV2NumbersCountriesRegions404Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersCountriesRegionsIndexError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersCountriesRegions401Error1> onApiV2NumbersCountriesRegions401Error1,
        Action<ApiV2NumbersCountriesRegions403Error1> onApiV2NumbersCountriesRegions403Error1,
        Action<ApiV2NumbersCountriesRegions404Error1> onApiV2NumbersCountriesRegions404Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersCountriesRegions401Error1(
            out var apiV2NumbersCountriesRegions401Error1Value)) onApiV2NumbersCountriesRegions401Error1(
            apiV2NumbersCountriesRegions401Error1Value);
        else if (TryGetApiV2NumbersCountriesRegions403Error1(
            out var apiV2NumbersCountriesRegions403Error1Value)) onApiV2NumbersCountriesRegions403Error1(
            apiV2NumbersCountriesRegions403Error1Value);
        else if (TryGetApiV2NumbersCountriesRegions404Error1(
            out var apiV2NumbersCountriesRegions404Error1Value)) onApiV2NumbersCountriesRegions404Error1(
            apiV2NumbersCountriesRegions404Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersCountriesRegionsIndexError)} holds no value.");
    }

    private static Task<NumbersCountriesRegionsIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2NumbersCountriesRegions401Error1>().As(AsApiV2NumbersCountriesRegions401Error1),
            403 => response.Json<ApiV2NumbersCountriesRegions403Error1>().As(AsApiV2NumbersCountriesRegions403Error1),
            404 => response.Json<ApiV2NumbersCountriesRegions404Error1>().As(AsApiV2NumbersCountriesRegions404Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersCountriesRegionsIndexError> Response { get; } = new(Create);
}
