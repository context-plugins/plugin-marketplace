using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class NumbersCountriesCitiesIndexError : ApiError
{
    private readonly Optional<ApiV2NumbersCountriesCities401Error1> _apiV2NumbersCountriesCities401Error1Value;

    private readonly Optional<ApiV2NumbersCountriesCities403Error1> _apiV2NumbersCountriesCities403Error1Value;

    private readonly Optional<ApiV2NumbersCountriesCities404Error1> _apiV2NumbersCountriesCities404Error1Value;

    private NumbersCountriesCitiesIndexError(Optional<ApiV2NumbersCountriesCities401Error1> apiV2NumbersCountriesCities401Error1Value,
        Optional<ApiV2NumbersCountriesCities403Error1> apiV2NumbersCountriesCities403Error1Value,
        Optional<ApiV2NumbersCountriesCities404Error1> apiV2NumbersCountriesCities404Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersCountriesCities401Error1Value = apiV2NumbersCountriesCities401Error1Value;
        _apiV2NumbersCountriesCities403Error1Value = apiV2NumbersCountriesCities403Error1Value;
        _apiV2NumbersCountriesCities404Error1Value = apiV2NumbersCountriesCities404Error1Value;
    }

    private static NumbersCountriesCitiesIndexError AsApiV2NumbersCountriesCities401Error1(ApiV2NumbersCountriesCities401Error1 value) =>
        new(Optional<ApiV2NumbersCountriesCities401Error1>.Some(value), default, default, default);

    private static NumbersCountriesCitiesIndexError AsApiV2NumbersCountriesCities403Error1(ApiV2NumbersCountriesCities403Error1 value) =>
        new(default, Optional<ApiV2NumbersCountriesCities403Error1>.Some(value), default, default);

    private static NumbersCountriesCitiesIndexError AsApiV2NumbersCountriesCities404Error1(ApiV2NumbersCountriesCities404Error1 value) =>
        new(default, default, Optional<ApiV2NumbersCountriesCities404Error1>.Some(value), default);

    private static NumbersCountriesCitiesIndexError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersCountriesCities401Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCities401Error1? value) =>
        _apiV2NumbersCountriesCities401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersCountriesCities403Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCities403Error1? value) =>
        _apiV2NumbersCountriesCities403Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersCountriesCities404Error1([NotNullWhen(true)] out ApiV2NumbersCountriesCities404Error1? value) =>
        _apiV2NumbersCountriesCities404Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersCountriesCities401Error1, TResult> onApiV2NumbersCountriesCities401Error1,
        Func<ApiV2NumbersCountriesCities403Error1, TResult> onApiV2NumbersCountriesCities403Error1,
        Func<ApiV2NumbersCountriesCities404Error1, TResult> onApiV2NumbersCountriesCities404Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersCountriesCities401Error1(
                out var apiV2NumbersCountriesCities401Error1Value) => onApiV2NumbersCountriesCities401Error1(
                apiV2NumbersCountriesCities401Error1Value),
            _ when TryGetApiV2NumbersCountriesCities403Error1(
                out var apiV2NumbersCountriesCities403Error1Value) => onApiV2NumbersCountriesCities403Error1(
                apiV2NumbersCountriesCities403Error1Value),
            _ when TryGetApiV2NumbersCountriesCities404Error1(
                out var apiV2NumbersCountriesCities404Error1Value) => onApiV2NumbersCountriesCities404Error1(
                apiV2NumbersCountriesCities404Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersCountriesCitiesIndexError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersCountriesCities401Error1> onApiV2NumbersCountriesCities401Error1,
        Action<ApiV2NumbersCountriesCities403Error1> onApiV2NumbersCountriesCities403Error1,
        Action<ApiV2NumbersCountriesCities404Error1> onApiV2NumbersCountriesCities404Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersCountriesCities401Error1(
            out var apiV2NumbersCountriesCities401Error1Value)) onApiV2NumbersCountriesCities401Error1(
            apiV2NumbersCountriesCities401Error1Value);
        else if (TryGetApiV2NumbersCountriesCities403Error1(
            out var apiV2NumbersCountriesCities403Error1Value)) onApiV2NumbersCountriesCities403Error1(
            apiV2NumbersCountriesCities403Error1Value);
        else if (TryGetApiV2NumbersCountriesCities404Error1(
            out var apiV2NumbersCountriesCities404Error1Value)) onApiV2NumbersCountriesCities404Error1(
            apiV2NumbersCountriesCities404Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersCountriesCitiesIndexError)} holds no value.");
    }

    private static Task<NumbersCountriesCitiesIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2NumbersCountriesCities401Error1>().As(AsApiV2NumbersCountriesCities401Error1),
            403 => response.Json<ApiV2NumbersCountriesCities403Error1>().As(AsApiV2NumbersCountriesCities403Error1),
            404 => response.Json<ApiV2NumbersCountriesCities404Error1>().As(AsApiV2NumbersCountriesCities404Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersCountriesCitiesIndexError> Response { get; } = new(Create);
}
