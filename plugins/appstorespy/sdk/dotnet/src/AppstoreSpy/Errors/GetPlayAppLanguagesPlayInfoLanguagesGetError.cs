using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetPlayAppLanguagesPlayInfoLanguagesGetError : ApiError
{
    private readonly Optional<PlayInfoLanguages401Error1> _playInfoLanguages401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetPlayAppLanguagesPlayInfoLanguagesGetError(Optional<PlayInfoLanguages401Error1> playInfoLanguages401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _playInfoLanguages401Error1Value = playInfoLanguages401Error1Value;
        _stringValue = stringValue;
    }

    private static GetPlayAppLanguagesPlayInfoLanguagesGetError AsPlayInfoLanguages401Error1(PlayInfoLanguages401Error1 value) =>
        new(Optional<PlayInfoLanguages401Error1>.Some(value), default, default);

    private static GetPlayAppLanguagesPlayInfoLanguagesGetError AsString(string value) =>
        new(default, Optional<string>.Some(value), default);

    private static GetPlayAppLanguagesPlayInfoLanguagesGetError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetPlayInfoLanguages401Error1([NotNullWhen(true)] out PlayInfoLanguages401Error1? value) =>
        _playInfoLanguages401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<PlayInfoLanguages401Error1, TResult> onPlayInfoLanguages401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPlayInfoLanguages401Error1(
                out var playInfoLanguages401Error1Value) => onPlayInfoLanguages401Error1(
                playInfoLanguages401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetPlayAppLanguagesPlayInfoLanguagesGetError)} holds no value.")
        };

    public void Match(Action<PlayInfoLanguages401Error1> onPlayInfoLanguages401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetPlayInfoLanguages401Error1(out var playInfoLanguages401Error1Value)) onPlayInfoLanguages401Error1(
            playInfoLanguages401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetPlayAppLanguagesPlayInfoLanguagesGetError)} holds no value.");
    }

    private static Task<GetPlayAppLanguagesPlayInfoLanguagesGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayInfoLanguages401Error1>().As(AsPlayInfoLanguages401Error1),
            402 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPlayAppLanguagesPlayInfoLanguagesGetError> Response { get; } = new(Create);
}
