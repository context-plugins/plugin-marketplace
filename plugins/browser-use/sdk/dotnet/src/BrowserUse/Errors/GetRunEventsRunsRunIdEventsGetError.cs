using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class GetRunEventsRunsRunIdEventsGetError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private GetRunEventsRunsRunIdEventsGetError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
        _noContentValue = noContentValue;
    }

    private static GetRunEventsRunsRunIdEventsGetError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default, default);

    private static GetRunEventsRunsRunIdEventsGetError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static GetRunEventsRunsRunIdEventsGetError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetRunEventsRunsRunIdEventsGetError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetRunEventsRunsRunIdEventsGetError)} holds no value.");
    }

    private static Task<GetRunEventsRunsRunIdEventsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 or 404 => response.RawBody().As(AsNoContent),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetRunEventsRunsRunIdEventsGetError> Response { get; } = new(Create);
}
