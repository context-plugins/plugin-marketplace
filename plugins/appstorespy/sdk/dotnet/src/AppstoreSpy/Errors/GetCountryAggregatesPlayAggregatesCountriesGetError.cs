using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetCountryAggregatesPlayAggregatesCountriesGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayAggregatesCountries401Error1> _playAggregatesCountries401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetCountryAggregatesPlayAggregatesCountriesGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayAggregatesCountries401Error1> playAggregatesCountries401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playAggregatesCountries401Error1Value = playAggregatesCountries401Error1Value;
        _stringValue = stringValue;
    }

    private static GetCountryAggregatesPlayAggregatesCountriesGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetCountryAggregatesPlayAggregatesCountriesGetError AsPlayAggregatesCountries401Error1(PlayAggregatesCountries401Error1 value) =>
        new(default, Optional<PlayAggregatesCountries401Error1>.Some(value), default, default);

    private static GetCountryAggregatesPlayAggregatesCountriesGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetCountryAggregatesPlayAggregatesCountriesGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayAggregatesCountries401Error1([NotNullWhen(true)] out PlayAggregatesCountries401Error1? value) =>
        _playAggregatesCountries401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayAggregatesCountries401Error1, TResult> onPlayAggregatesCountries401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayAggregatesCountries401Error1(
                out var playAggregatesCountries401Error1Value) => onPlayAggregatesCountries401Error1(
                playAggregatesCountries401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetCountryAggregatesPlayAggregatesCountriesGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayAggregatesCountries401Error1> onPlayAggregatesCountries401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayAggregatesCountries401Error1(
            out var playAggregatesCountries401Error1Value)) onPlayAggregatesCountries401Error1(
            playAggregatesCountries401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetCountryAggregatesPlayAggregatesCountriesGetError)} holds no value.");
    }

    private static Task<GetCountryAggregatesPlayAggregatesCountriesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayAggregatesCountries401Error1>().As(AsPlayAggregatesCountries401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCountryAggregatesPlayAggregatesCountriesGetError> Response { get; } = new(
        Create);
}
