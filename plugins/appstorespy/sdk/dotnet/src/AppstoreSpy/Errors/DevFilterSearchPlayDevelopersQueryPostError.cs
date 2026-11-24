using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class DevFilterSearchPlayDevelopersQueryPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayDevelopersQuery401Error1> _playDevelopersQuery401Error1Value;

    private readonly Optional<string> _stringValue;

    private DevFilterSearchPlayDevelopersQueryPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayDevelopersQuery401Error1> playDevelopersQuery401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playDevelopersQuery401Error1Value = playDevelopersQuery401Error1Value;
        _stringValue = stringValue;
    }

    private static DevFilterSearchPlayDevelopersQueryPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static DevFilterSearchPlayDevelopersQueryPostError AsPlayDevelopersQuery401Error1(PlayDevelopersQuery401Error1 value) =>
        new(default, Optional<PlayDevelopersQuery401Error1>.Some(value), default, default);

    private static DevFilterSearchPlayDevelopersQueryPostError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static DevFilterSearchPlayDevelopersQueryPostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayDevelopersQuery401Error1([NotNullWhen(true)] out PlayDevelopersQuery401Error1? value) =>
        _playDevelopersQuery401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayDevelopersQuery401Error1, TResult> onPlayDevelopersQuery401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayDevelopersQuery401Error1(
                out var playDevelopersQuery401Error1Value) => onPlayDevelopersQuery401Error1(
                playDevelopersQuery401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(DevFilterSearchPlayDevelopersQueryPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayDevelopersQuery401Error1> onPlayDevelopersQuery401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayDevelopersQuery401Error1(
            out var playDevelopersQuery401Error1Value)) onPlayDevelopersQuery401Error1(
            playDevelopersQuery401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(DevFilterSearchPlayDevelopersQueryPostError)} holds no value.");
    }

    private static Task<DevFilterSearchPlayDevelopersQueryPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayDevelopersQuery401Error1>().As(AsPlayDevelopersQuery401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DevFilterSearchPlayDevelopersQueryPostError> Response { get; } = new(Create);
}
