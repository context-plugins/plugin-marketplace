using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayAppsInstallsDaily401Error1> _playAppsInstallsDaily401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayAppsInstallsDaily401Error1> playAppsInstallsDaily401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playAppsInstallsDaily401Error1Value = playAppsInstallsDaily401Error1Value;
        _stringValue = stringValue;
    }

    private static GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError AsPlayAppsInstallsDaily401Error1(PlayAppsInstallsDaily401Error1 value) =>
        new(default, Optional<PlayAppsInstallsDaily401Error1>.Some(value), default, default);

    private static GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayAppsInstallsDaily401Error1([NotNullWhen(true)] out PlayAppsInstallsDaily401Error1? value) =>
        _playAppsInstallsDaily401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayAppsInstallsDaily401Error1, TResult> onPlayAppsInstallsDaily401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayAppsInstallsDaily401Error1(
                out var playAppsInstallsDaily401Error1Value) => onPlayAppsInstallsDaily401Error1(
                playAppsInstallsDaily401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayAppsInstallsDaily401Error1> onPlayAppsInstallsDaily401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayAppsInstallsDaily401Error1(
            out var playAppsInstallsDaily401Error1Value)) onPlayAppsInstallsDaily401Error1(
            playAppsInstallsDaily401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError)} holds no value.");
    }

    private static Task<GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayAppsInstallsDaily401Error1>().As(AsPlayAppsInstallsDaily401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError> Response { get; } = new(
        Create);
}
