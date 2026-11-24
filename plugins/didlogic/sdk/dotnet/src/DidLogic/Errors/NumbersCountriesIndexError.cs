using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class NumbersCountriesIndexError : ApiError
{
    private readonly Optional<ApiV2NumbersCountries401Error1> _apiV2NumbersCountries401Error1Value;

    private readonly Optional<ApiV2NumbersCountries403Error1> _apiV2NumbersCountries403Error1Value;

    private NumbersCountriesIndexError(Optional<ApiV2NumbersCountries401Error1> apiV2NumbersCountries401Error1Value,
        Optional<ApiV2NumbersCountries403Error1> apiV2NumbersCountries403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersCountries401Error1Value = apiV2NumbersCountries401Error1Value;
        _apiV2NumbersCountries403Error1Value = apiV2NumbersCountries403Error1Value;
    }

    private static NumbersCountriesIndexError AsApiV2NumbersCountries401Error1(ApiV2NumbersCountries401Error1 value) =>
        new(Optional<ApiV2NumbersCountries401Error1>.Some(value), default, default);

    private static NumbersCountriesIndexError AsApiV2NumbersCountries403Error1(ApiV2NumbersCountries403Error1 value) =>
        new(default, Optional<ApiV2NumbersCountries403Error1>.Some(value), default);

    private static NumbersCountriesIndexError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersCountries401Error1([NotNullWhen(true)] out ApiV2NumbersCountries401Error1? value) =>
        _apiV2NumbersCountries401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersCountries403Error1([NotNullWhen(true)] out ApiV2NumbersCountries403Error1? value) =>
        _apiV2NumbersCountries403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersCountries401Error1, TResult> onApiV2NumbersCountries401Error1,
        Func<ApiV2NumbersCountries403Error1, TResult> onApiV2NumbersCountries403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersCountries401Error1(
                out var apiV2NumbersCountries401Error1Value) => onApiV2NumbersCountries401Error1(
                apiV2NumbersCountries401Error1Value),
            _ when TryGetApiV2NumbersCountries403Error1(
                out var apiV2NumbersCountries403Error1Value) => onApiV2NumbersCountries403Error1(
                apiV2NumbersCountries403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersCountriesIndexError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersCountries401Error1> onApiV2NumbersCountries401Error1,
        Action<ApiV2NumbersCountries403Error1> onApiV2NumbersCountries403Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersCountries401Error1(
            out var apiV2NumbersCountries401Error1Value)) onApiV2NumbersCountries401Error1(
            apiV2NumbersCountries401Error1Value);
        else if (TryGetApiV2NumbersCountries403Error1(
            out var apiV2NumbersCountries403Error1Value)) onApiV2NumbersCountries403Error1(
            apiV2NumbersCountries403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersCountriesIndexError)} holds no value.");
    }

    private static Task<NumbersCountriesIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2NumbersCountries401Error1>().As(AsApiV2NumbersCountries401Error1),
            403 => response.Json<ApiV2NumbersCountries403Error1>().As(AsApiV2NumbersCountries403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersCountriesIndexError> Response { get; } = new(Create);
}
