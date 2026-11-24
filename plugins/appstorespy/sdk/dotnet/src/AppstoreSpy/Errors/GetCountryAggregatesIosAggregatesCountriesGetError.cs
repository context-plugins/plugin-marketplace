using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetCountryAggregatesIosAggregatesCountriesGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<IosAggregatesCountries401Error1> _iosAggregatesCountries401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetCountryAggregatesIosAggregatesCountriesGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<IosAggregatesCountries401Error1> iosAggregatesCountries401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _iosAggregatesCountries401Error1Value = iosAggregatesCountries401Error1Value;
        _stringValue = stringValue;
    }

    private static GetCountryAggregatesIosAggregatesCountriesGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetCountryAggregatesIosAggregatesCountriesGetError AsIosAggregatesCountries401Error1(IosAggregatesCountries401Error1 value) =>
        new(default, Optional<IosAggregatesCountries401Error1>.Some(value), default, default);

    private static GetCountryAggregatesIosAggregatesCountriesGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetCountryAggregatesIosAggregatesCountriesGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetIosAggregatesCountries401Error1([NotNullWhen(true)] out IosAggregatesCountries401Error1? value) =>
        _iosAggregatesCountries401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<IosAggregatesCountries401Error1, TResult> onIosAggregatesCountries401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetIosAggregatesCountries401Error1(
                out var iosAggregatesCountries401Error1Value) => onIosAggregatesCountries401Error1(
                iosAggregatesCountries401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetCountryAggregatesIosAggregatesCountriesGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<IosAggregatesCountries401Error1> onIosAggregatesCountries401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetIosAggregatesCountries401Error1(
            out var iosAggregatesCountries401Error1Value)) onIosAggregatesCountries401Error1(
            iosAggregatesCountries401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetCountryAggregatesIosAggregatesCountriesGetError)} holds no value.");
    }

    private static Task<GetCountryAggregatesIosAggregatesCountriesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosAggregatesCountries401Error1>().As(AsIosAggregatesCountries401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCountryAggregatesIosAggregatesCountriesGetError> Response { get; } = new(
        Create);
}
