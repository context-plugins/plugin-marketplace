using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Shortcut.Core.ErrorResponse;
using Shortcut.Core.Models;
using Shortcut.Models;

namespace Shortcut.Errors;

public sealed class SearchMilestonesError : ApiError
{
    private readonly Optional<MaxSearchResultsExceededError> _maxSearchResultsExceededErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private SearchMilestonesError(Optional<MaxSearchResultsExceededError> maxSearchResultsExceededErrorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _maxSearchResultsExceededErrorValue = maxSearchResultsExceededErrorValue;
        _noContentValue = noContentValue;
    }

    private static SearchMilestonesError AsMaxSearchResultsExceededError(MaxSearchResultsExceededError value) =>
        new(Optional<MaxSearchResultsExceededError>.Some(value), default, default);

    private static SearchMilestonesError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static SearchMilestonesError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value) =>
        _maxSearchResultsExceededErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<MaxSearchResultsExceededError, TResult> onMaxSearchResultsExceededError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMaxSearchResultsExceededError(
                out var maxSearchResultsExceededErrorValue) => onMaxSearchResultsExceededError(
                maxSearchResultsExceededErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchMilestonesError)} holds no value.")
        };

    public void Match(Action<MaxSearchResultsExceededError> onMaxSearchResultsExceededError,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetMaxSearchResultsExceededError(
            out var maxSearchResultsExceededErrorValue)) onMaxSearchResultsExceededError(
            maxSearchResultsExceededErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchMilestonesError)} holds no value.");
    }

    private static Task<SearchMilestonesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<MaxSearchResultsExceededError>().As(AsMaxSearchResultsExceededError),
            404 or 422 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchMilestonesError> Response { get; } = new(Create);
}
