using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AppstoreSpy.Core.ErrorResponse;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models;

namespace AppstoreSpy.Errors;

public sealed class GetSummaryPlayAppsSummaryPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<PlayAppsSummary401Error1> _playAppsSummary401Error1Value;

    private readonly Optional<string> _stringValue;

    private GetSummaryPlayAppsSummaryPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<PlayAppsSummary401Error1> playAppsSummary401Error1Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _playAppsSummary401Error1Value = playAppsSummary401Error1Value;
        _stringValue = stringValue;
    }

    private static GetSummaryPlayAppsSummaryPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default, default);

    private static GetSummaryPlayAppsSummaryPostError AsPlayAppsSummary401Error1(PlayAppsSummary401Error1 value) =>
        new(default, Optional<PlayAppsSummary401Error1>.Some(value), default, default);

    private static GetSummaryPlayAppsSummaryPostError AsString(string value) =>
        new(default, default, Optional<string>.Some(value), default);

    private static GetSummaryPlayAppsSummaryPostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetPlayAppsSummary401Error1([NotNullWhen(true)] out PlayAppsSummary401Error1? value) =>
        _playAppsSummary401Error1Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<PlayAppsSummary401Error1, TResult> onPlayAppsSummary401Error1,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetPlayAppsSummary401Error1(out var playAppsSummary401Error1Value) => onPlayAppsSummary401Error1(
                playAppsSummary401Error1Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSummaryPlayAppsSummaryPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<PlayAppsSummary401Error1> onPlayAppsSummary401Error1,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetPlayAppsSummary401Error1(out var playAppsSummary401Error1Value)) onPlayAppsSummary401Error1(
            playAppsSummary401Error1Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSummaryPlayAppsSummaryPostError)} holds no value.");
    }

    private static Task<GetSummaryPlayAppsSummaryPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<PlayAppsSummary401Error1>().As(AsPlayAppsSummary401Error1),
            402 => response.Json<string>().As(AsString),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSummaryPlayAppsSummaryPostError> Response { get; } = new(Create);
}
