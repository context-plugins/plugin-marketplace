using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetSuggestsPlaySuggestionsGet2Error : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlaySuggestions401Error1> _playSuggestions401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetSuggestsPlaySuggestionsGet2Error(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlaySuggestions401Error1> playSuggestions401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playSuggestions401Error1Value = playSuggestions401Error1Value;
        _stringValue = stringValue;
    }

    private static GetSuggestsPlaySuggestionsGet2Error AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetSuggestsPlaySuggestionsGet2Error AsPlaySuggestions401Error1(PlaySuggestions401Error1 value) =>
        new(default, Optional<PlaySuggestions401Error1>.Some(value), default, default);

    private static GetSuggestsPlaySuggestionsGet2Error AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetSuggestsPlaySuggestionsGet2Error AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlaySuggestions401Error1([NotNullWhen(true)] out PlaySuggestions401Error1? value) =>
        _playSuggestions401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlaySuggestions401Error1, TResult> onPlaySuggestions401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlaySuggestions401Error1(out var playSuggestions401Error1Value) => onPlaySuggestions401Error1(
                playSuggestions401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSuggestsPlaySuggestionsGet2Error)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlaySuggestions401Error1> onPlaySuggestions401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlaySuggestions401Error1(out var playSuggestions401Error1Value)) onPlaySuggestions401Error1(
            playSuggestions401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSuggestsPlaySuggestionsGet2Error)} holds no value.");
    }

    private static Task<GetSuggestsPlaySuggestionsGet2Error> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlaySuggestions401Error1>().As(AsPlaySuggestions401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSuggestsPlaySuggestionsGet2Error> Response { get; } = new(Create);
}
