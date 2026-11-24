using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetSimilarPlayAppsSimilarPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayAppsSimilar401Error1> _playAppsSimilar401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetSimilarPlayAppsSimilarPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayAppsSimilar401Error1> playAppsSimilar401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playAppsSimilar401Error1Value = playAppsSimilar401Error1Value;
        _stringValue = stringValue;
    }

    private static GetSimilarPlayAppsSimilarPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetSimilarPlayAppsSimilarPostError AsPlayAppsSimilar401Error1(PlayAppsSimilar401Error1 value) =>
        new(default, Optional<PlayAppsSimilar401Error1>.Some(value), default, default);

    private static GetSimilarPlayAppsSimilarPostError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetSimilarPlayAppsSimilarPostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayAppsSimilar401Error1([NotNullWhen(true)] out PlayAppsSimilar401Error1? value) =>
        _playAppsSimilar401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayAppsSimilar401Error1, TResult> onPlayAppsSimilar401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayAppsSimilar401Error1(out var playAppsSimilar401Error1Value) => onPlayAppsSimilar401Error1(
                playAppsSimilar401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSimilarPlayAppsSimilarPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayAppsSimilar401Error1> onPlayAppsSimilar401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayAppsSimilar401Error1(out var playAppsSimilar401Error1Value)) onPlayAppsSimilar401Error1(
            playAppsSimilar401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSimilarPlayAppsSimilarPostError)} holds no value.");
    }

    private static Task<GetSimilarPlayAppsSimilarPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayAppsSimilar401Error1>().As(AsPlayAppsSimilar401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSimilarPlayAppsSimilarPostError> Response { get; } = new(Create);
}
