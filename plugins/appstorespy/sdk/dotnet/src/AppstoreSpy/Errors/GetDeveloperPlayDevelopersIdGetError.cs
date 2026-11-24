using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetDeveloperPlayDevelopersIdGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayDevelopers401Error1> _playDevelopers401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetDeveloperPlayDevelopersIdGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayDevelopers401Error1> playDevelopers401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playDevelopers401Error1Value = playDevelopers401Error1Value;
        _stringValue = stringValue;
    }

    private static GetDeveloperPlayDevelopersIdGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetDeveloperPlayDevelopersIdGetError AsPlayDevelopers401Error1(PlayDevelopers401Error1 value) =>
        new(default, Optional<PlayDevelopers401Error1>.Some(value), default, default);

    private static GetDeveloperPlayDevelopersIdGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetDeveloperPlayDevelopersIdGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayDevelopers401Error1([NotNullWhen(true)] out PlayDevelopers401Error1? value) =>
        _playDevelopers401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayDevelopers401Error1, TResult> onPlayDevelopers401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayDevelopers401Error1(out var playDevelopers401Error1Value) => onPlayDevelopers401Error1(
                playDevelopers401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetDeveloperPlayDevelopersIdGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayDevelopers401Error1> onPlayDevelopers401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayDevelopers401Error1(out var playDevelopers401Error1Value)) onPlayDevelopers401Error1(
            playDevelopers401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetDeveloperPlayDevelopersIdGetError)} holds no value.");
    }

    private static Task<GetDeveloperPlayDevelopersIdGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayDevelopers401Error1>().As(AsPlayDevelopers401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetDeveloperPlayDevelopersIdGetError> Response { get; } = new(Create);
}
