using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetEventsPlayLiveopsGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayLiveops401Error1> _playLiveops401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetEventsPlayLiveopsGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayLiveops401Error1> playLiveops401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playLiveops401Error1Value = playLiveops401Error1Value;
        _stringValue = stringValue;
    }

    private static GetEventsPlayLiveopsGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetEventsPlayLiveopsGetError AsPlayLiveops401Error1(PlayLiveops401Error1 value) =>
        new(default, Optional<PlayLiveops401Error1>.Some(value), default, default);

    private static GetEventsPlayLiveopsGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetEventsPlayLiveopsGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayLiveops401Error1([NotNullWhen(true)] out PlayLiveops401Error1? value) =>
        _playLiveops401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayLiveops401Error1, TResult> onPlayLiveops401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayLiveops401Error1(out var playLiveops401Error1Value) => onPlayLiveops401Error1(
                playLiveops401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetEventsPlayLiveopsGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayLiveops401Error1> onPlayLiveops401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayLiveops401Error1(out var playLiveops401Error1Value)) onPlayLiveops401Error1(
            playLiveops401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetEventsPlayLiveopsGetError)} holds no value.");
    }

    private static Task<GetEventsPlayLiveopsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayLiveops401Error1>().As(AsPlayLiveops401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetEventsPlayLiveopsGetError> Response { get; } = new(Create);
}
