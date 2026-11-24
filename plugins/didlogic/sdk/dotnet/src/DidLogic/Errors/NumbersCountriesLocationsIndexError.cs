using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class NumbersCountriesLocationsIndexError : ApiError
{
    private readonly Optional<ApiV2NumbersCountriesLocations401Error1> _apiV2NumbersCountriesLocations401Error1Value;

    private readonly Optional<ApiV2NumbersCountriesLocations403Error1> _apiV2NumbersCountriesLocations403Error1Value;

    private readonly Optional<ApiV2NumbersCountriesLocations404Error1> _apiV2NumbersCountriesLocations404Error1Value;

    private NumbersCountriesLocationsIndexError(Optional<ApiV2NumbersCountriesLocations401Error1> apiV2NumbersCountriesLocations401Error1Value,
        Optional<ApiV2NumbersCountriesLocations403Error1> apiV2NumbersCountriesLocations403Error1Value,
        Optional<ApiV2NumbersCountriesLocations404Error1> apiV2NumbersCountriesLocations404Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersCountriesLocations401Error1Value = apiV2NumbersCountriesLocations401Error1Value;
        _apiV2NumbersCountriesLocations403Error1Value = apiV2NumbersCountriesLocations403Error1Value;
        _apiV2NumbersCountriesLocations404Error1Value = apiV2NumbersCountriesLocations404Error1Value;
    }

    private static NumbersCountriesLocationsIndexError AsApiV2NumbersCountriesLocations401Error1(ApiV2NumbersCountriesLocations401Error1 value) =>
        new(Optional<ApiV2NumbersCountriesLocations401Error1>.Some(value), default, default, default);

    private static NumbersCountriesLocationsIndexError AsApiV2NumbersCountriesLocations403Error1(ApiV2NumbersCountriesLocations403Error1 value) =>
        new(default, Optional<ApiV2NumbersCountriesLocations403Error1>.Some(value), default, default);

    private static NumbersCountriesLocationsIndexError AsApiV2NumbersCountriesLocations404Error1(ApiV2NumbersCountriesLocations404Error1 value) =>
        new(default, default, Optional<ApiV2NumbersCountriesLocations404Error1>.Some(value), default);

    private static NumbersCountriesLocationsIndexError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersCountriesLocations401Error1([NotNullWhen(true)] out ApiV2NumbersCountriesLocations401Error1? value) =>
        _apiV2NumbersCountriesLocations401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersCountriesLocations403Error1([NotNullWhen(true)] out ApiV2NumbersCountriesLocations403Error1? value) =>
        _apiV2NumbersCountriesLocations403Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersCountriesLocations404Error1([NotNullWhen(true)] out ApiV2NumbersCountriesLocations404Error1? value) =>
        _apiV2NumbersCountriesLocations404Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersCountriesLocations401Error1, TResult> onApiV2NumbersCountriesLocations401Error1,
        Func<ApiV2NumbersCountriesLocations403Error1, TResult> onApiV2NumbersCountriesLocations403Error1,
        Func<ApiV2NumbersCountriesLocations404Error1, TResult> onApiV2NumbersCountriesLocations404Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersCountriesLocations401Error1(
                out var apiV2NumbersCountriesLocations401Error1Value) => onApiV2NumbersCountriesLocations401Error1(
                apiV2NumbersCountriesLocations401Error1Value),
            _ when TryGetApiV2NumbersCountriesLocations403Error1(
                out var apiV2NumbersCountriesLocations403Error1Value) => onApiV2NumbersCountriesLocations403Error1(
                apiV2NumbersCountriesLocations403Error1Value),
            _ when TryGetApiV2NumbersCountriesLocations404Error1(
                out var apiV2NumbersCountriesLocations404Error1Value) => onApiV2NumbersCountriesLocations404Error1(
                apiV2NumbersCountriesLocations404Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersCountriesLocationsIndexError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersCountriesLocations401Error1> onApiV2NumbersCountriesLocations401Error1,
        Action<ApiV2NumbersCountriesLocations403Error1> onApiV2NumbersCountriesLocations403Error1,
        Action<ApiV2NumbersCountriesLocations404Error1> onApiV2NumbersCountriesLocations404Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersCountriesLocations401Error1(
            out var apiV2NumbersCountriesLocations401Error1Value)) onApiV2NumbersCountriesLocations401Error1(
            apiV2NumbersCountriesLocations401Error1Value);
        else if (TryGetApiV2NumbersCountriesLocations403Error1(
            out var apiV2NumbersCountriesLocations403Error1Value)) onApiV2NumbersCountriesLocations403Error1(
            apiV2NumbersCountriesLocations403Error1Value);
        else if (TryGetApiV2NumbersCountriesLocations404Error1(
            out var apiV2NumbersCountriesLocations404Error1Value)) onApiV2NumbersCountriesLocations404Error1(
            apiV2NumbersCountriesLocations404Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersCountriesLocationsIndexError)} holds no value.");
    }

    private static Task<NumbersCountriesLocationsIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2NumbersCountriesLocations401Error1>().As(
                AsApiV2NumbersCountriesLocations401Error1),
            403 => response.Json<ApiV2NumbersCountriesLocations403Error1>().As(
                AsApiV2NumbersCountriesLocations403Error1),
            404 => response.Json<ApiV2NumbersCountriesLocations404Error1>().As(
                AsApiV2NumbersCountriesLocations404Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersCountriesLocationsIndexError> Response { get; } = new(Create);
}
