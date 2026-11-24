using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetReviewsPlayAppsIdReviewsGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayAppsReviews401Error1> _playAppsReviews401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetReviewsPlayAppsIdReviewsGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayAppsReviews401Error1> playAppsReviews401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playAppsReviews401Error1Value = playAppsReviews401Error1Value;
        _stringValue = stringValue;
    }

    private static GetReviewsPlayAppsIdReviewsGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetReviewsPlayAppsIdReviewsGetError AsPlayAppsReviews401Error1(PlayAppsReviews401Error1 value) =>
        new(default, Optional<PlayAppsReviews401Error1>.Some(value), default, default);

    private static GetReviewsPlayAppsIdReviewsGetError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetReviewsPlayAppsIdReviewsGetError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayAppsReviews401Error1([NotNullWhen(true)] out PlayAppsReviews401Error1? value) =>
        _playAppsReviews401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayAppsReviews401Error1, TResult> onPlayAppsReviews401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayAppsReviews401Error1(out var playAppsReviews401Error1Value) => onPlayAppsReviews401Error1(
                playAppsReviews401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetReviewsPlayAppsIdReviewsGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayAppsReviews401Error1> onPlayAppsReviews401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayAppsReviews401Error1(out var playAppsReviews401Error1Value)) onPlayAppsReviews401Error1(
            playAppsReviews401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetReviewsPlayAppsIdReviewsGetError)} holds no value.");
    }

    private static Task<GetReviewsPlayAppsIdReviewsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayAppsReviews401Error1>().As(AsPlayAppsReviews401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetReviewsPlayAppsIdReviewsGetError> Response { get; } = new(Create);
}
