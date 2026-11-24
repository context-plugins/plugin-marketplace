using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetAppSearchPlayAppsGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayApps401Error1> _playApps401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetAppSearchPlayAppsGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayApps401Error1> playApps401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playApps401Error1Value = playApps401Error1Value;
        _stringValue = stringValue;
    }

    private static GetAppSearchPlayAppsGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetAppSearchPlayAppsGetError AsPlayApps401Error1(PlayApps401Error1 value) =>
        new(default, Optional<PlayApps401Error1>.Some(value), default, default);

    private static GetAppSearchPlayAppsGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetAppSearchPlayAppsGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayApps401Error1([NotNullWhen(true)] out PlayApps401Error1? value) =>
        _playApps401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayApps401Error1, TResult> onPlayApps401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayApps401Error1(out var playApps401Error1Value) => onPlayApps401Error1(
                playApps401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAppSearchPlayAppsGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayApps401Error1> onPlayApps401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayApps401Error1(out var playApps401Error1Value)) onPlayApps401Error1(playApps401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAppSearchPlayAppsGetError)} holds no value.");
    }

    private static Task<GetAppSearchPlayAppsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayApps401Error1>().As(AsPlayApps401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAppSearchPlayAppsGetError> Response { get; } = new(Create);
}
