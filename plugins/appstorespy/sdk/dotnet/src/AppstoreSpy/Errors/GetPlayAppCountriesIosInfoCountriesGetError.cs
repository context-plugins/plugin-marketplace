using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetPlayAppCountriesIosInfoCountriesGetError : ApiError
{
    private readonly Optional<IosInfoCountries401Error1> _iosInfoCountries401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetPlayAppCountriesIosInfoCountriesGetError(Optional<IosInfoCountries401Error1> iosInfoCountries401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _iosInfoCountries401Error1Value = iosInfoCountries401Error1Value;
        _stringValue = stringValue;
    }

    private static GetPlayAppCountriesIosInfoCountriesGetError AsIosInfoCountries401Error1(IosInfoCountries401Error1 value) =>
        new(Optional<IosInfoCountries401Error1>.Some(value), default, default);

    private static GetPlayAppCountriesIosInfoCountriesGetError AsString(string value) =>
        new(default, Optional<string>.Some(value), default);

    private static GetPlayAppCountriesIosInfoCountriesGetError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetIosInfoCountries401Error1([NotNullWhen(true)] out IosInfoCountries401Error1? value) =>
        _iosInfoCountries401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IosInfoCountries401Error1, TResult> onIosInfoCountries401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetIosInfoCountries401Error1(
                out var iosInfoCountries401Error1Value) => onIosInfoCountries401Error1(iosInfoCountries401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetPlayAppCountriesIosInfoCountriesGetError)} holds no value.")
        };

    public void Match(Action<IosInfoCountries401Error1> onIosInfoCountries401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetIosInfoCountries401Error1(out var iosInfoCountries401Error1Value)) onIosInfoCountries401Error1(
            iosInfoCountries401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetPlayAppCountriesIosInfoCountriesGetError)} holds no value.");
    }

    private static Task<GetPlayAppCountriesIosInfoCountriesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<IosInfoCountries401Error1>().As(AsIosInfoCountries401Error1),
            402 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPlayAppCountriesIosInfoCountriesGetError> Response { get; } = new(Create);
}
