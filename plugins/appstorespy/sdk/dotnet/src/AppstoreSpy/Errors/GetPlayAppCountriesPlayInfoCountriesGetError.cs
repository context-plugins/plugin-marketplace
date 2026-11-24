using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetPlayAppCountriesPlayInfoCountriesGetError : ApiError
{
    private readonly Optional<PlayInfoCountries401Error1> _playInfoCountries401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetPlayAppCountriesPlayInfoCountriesGetError(Optional<PlayInfoCountries401Error1> playInfoCountries401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _playInfoCountries401Error1Value = playInfoCountries401Error1Value;
        _stringValue = stringValue;
    }

    private static GetPlayAppCountriesPlayInfoCountriesGetError AsPlayInfoCountries401Error1(PlayInfoCountries401Error1 value) =>
        new(Optional<PlayInfoCountries401Error1>.Some(value), default, default);

    private static GetPlayAppCountriesPlayInfoCountriesGetError AsString(string value) =>
        new(default, Optional<string>.Some(value), default);

    private static GetPlayAppCountriesPlayInfoCountriesGetError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetPlayInfoCountries401Error1([NotNullWhen(true)] out PlayInfoCountries401Error1? value) =>
        _playInfoCountries401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<PlayInfoCountries401Error1, TResult> onPlayInfoCountries401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPlayInfoCountries401Error1(
                out var playInfoCountries401Error1Value) => onPlayInfoCountries401Error1(
                playInfoCountries401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetPlayAppCountriesPlayInfoCountriesGetError)} holds no value.")
        };

    public void Match(Action<PlayInfoCountries401Error1> onPlayInfoCountries401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetPlayInfoCountries401Error1(out var playInfoCountries401Error1Value)) onPlayInfoCountries401Error1(
            playInfoCountries401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetPlayAppCountriesPlayInfoCountriesGetError)} holds no value.");
    }

    private static Task<GetPlayAppCountriesPlayInfoCountriesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayInfoCountries401Error1>().As(AsPlayInfoCountries401Error1),
            402 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPlayAppCountriesPlayInfoCountriesGetError> Response { get; } = new(Create);
}
