using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetFilterSearchPlayAppsQueryPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayAppsQuery401Error1> _playAppsQuery401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetFilterSearchPlayAppsQueryPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayAppsQuery401Error1> playAppsQuery401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playAppsQuery401Error1Value = playAppsQuery401Error1Value;
        _stringValue = stringValue;
    }

    private static GetFilterSearchPlayAppsQueryPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetFilterSearchPlayAppsQueryPostError AsPlayAppsQuery401Error1(PlayAppsQuery401Error1 value) =>
        new(default, Optional<PlayAppsQuery401Error1>.Some(value), default, default);

    private static GetFilterSearchPlayAppsQueryPostError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetFilterSearchPlayAppsQueryPostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayAppsQuery401Error1([NotNullWhen(true)] out PlayAppsQuery401Error1? value) =>
        _playAppsQuery401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayAppsQuery401Error1, TResult> onPlayAppsQuery401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayAppsQuery401Error1(out var playAppsQuery401Error1Value) => onPlayAppsQuery401Error1(
                playAppsQuery401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetFilterSearchPlayAppsQueryPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayAppsQuery401Error1> onPlayAppsQuery401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayAppsQuery401Error1(out var playAppsQuery401Error1Value)) onPlayAppsQuery401Error1(
            playAppsQuery401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetFilterSearchPlayAppsQueryPostError)} holds no value.");
    }

    private static Task<GetFilterSearchPlayAppsQueryPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayAppsQuery401Error1>().As(AsPlayAppsQuery401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetFilterSearchPlayAppsQueryPostError> Response { get; } = new(Create);
}
