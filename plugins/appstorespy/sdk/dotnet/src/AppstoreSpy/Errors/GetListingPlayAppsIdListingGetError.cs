using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetListingPlayAppsIdListingGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<PlayAppsListing401Error1> _playAppsListing401Error1Value;

    private readonly Optional<PlayAppsListing429Error1> _playAppsListing429Error1Value;

    private readonly Optional<string> _stringValue;

    private GetListingPlayAppsIdListingGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> noContentValue,
        Optional<PlayAppsListing401Error1> playAppsListing401Error1Value,
        Optional<PlayAppsListing429Error1> playAppsListing429Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _noContentValue = noContentValue;
        _playAppsListing401Error1Value = playAppsListing401Error1Value;
        _playAppsListing429Error1Value = playAppsListing429Error1Value;
        _stringValue = stringValue;
    }

    private static GetListingPlayAppsIdListingGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default, default, default);

    private static GetListingPlayAppsIdListingGetError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default, default, default, default);

    private static GetListingPlayAppsIdListingGetError AsPlayAppsListing401Error1(PlayAppsListing401Error1 value) =>
        new(default, default, Optional<PlayAppsListing401Error1>.Some(value), default, default, default);

    private static GetListingPlayAppsIdListingGetError AsPlayAppsListing429Error1(PlayAppsListing429Error1 value) =>
        new(default, default, default, Optional<PlayAppsListing429Error1>.Some(value), default, default);

    private static GetListingPlayAppsIdListingGetError AsString(string value) =>
        new(default, default, default, default, Optional<string>.Some(value), default);

    private static GetListingPlayAppsIdListingGetError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetPlayAppsListing401Error1([NotNullWhen(true)] out PlayAppsListing401Error1? value) =>
        _playAppsListing401Error1Value.TryGetValue(out value);

    public bool TryGetPlayAppsListing429Error1([NotNullWhen(true)] out PlayAppsListing429Error1? value) =>
        _playAppsListing429Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> onNoContent,
        Func<PlayAppsListing401Error1, TResult> onPlayAppsListing401Error1,
        Func<PlayAppsListing429Error1, TResult> onPlayAppsListing429Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetPlayAppsListing401Error1(out var playAppsListing401Error1Value) => onPlayAppsListing401Error1(
                playAppsListing401Error1Value),
            _ when TryGetPlayAppsListing429Error1(out var playAppsListing429Error1Value) => onPlayAppsListing429Error1(
                playAppsListing429Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetListingPlayAppsIdListingGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<RawError> onNoContent,
        Action<PlayAppsListing401Error1> onPlayAppsListing401Error1,
        Action<PlayAppsListing429Error1> onPlayAppsListing429Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetPlayAppsListing401Error1(out var playAppsListing401Error1Value)) onPlayAppsListing401Error1(
            playAppsListing401Error1Value);
        else if (TryGetPlayAppsListing429Error1(out var playAppsListing429Error1Value)) onPlayAppsListing429Error1(
            playAppsListing429Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetListingPlayAppsIdListingGetError)} holds no value.");
    }

    private static Task<GetListingPlayAppsIdListingGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayAppsListing401Error1>().As(AsPlayAppsListing401Error1),
            402 => response.Json<string>().As(AsString),
            404 or 502 => response.RawBody().As(AsNoContent),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            429 => response.Json<PlayAppsListing429Error1>().As(AsPlayAppsListing429Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetListingPlayAppsIdListingGetError> Response { get; } = new(Create);
}
