using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Shortcut.Core.ErrorResponse;
using Shortcut.Core.Models;
using Shortcut.Models;

namespace Shortcut.Errors;

public sealed class SearchDocumentsError : ApiError
{
    private readonly Optional<DisabledFeatureError> _disabledFeatureErrorValue;

    private readonly Optional<MaxSearchResultsExceededError> _maxSearchResultsExceededErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private SearchDocumentsError(Optional<DisabledFeatureError> disabledFeatureErrorValue,
        Optional<MaxSearchResultsExceededError> maxSearchResultsExceededErrorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _disabledFeatureErrorValue = disabledFeatureErrorValue;
        _maxSearchResultsExceededErrorValue = maxSearchResultsExceededErrorValue;
        _noContentValue = noContentValue;
    }

    private static SearchDocumentsError AsDisabledFeatureError(DisabledFeatureError value) =>
        new(Optional<DisabledFeatureError>.Some(value), default, default, default);

    private static SearchDocumentsError AsMaxSearchResultsExceededError(MaxSearchResultsExceededError value) =>
        new(default, Optional<MaxSearchResultsExceededError>.Some(value), default, default);

    private static SearchDocumentsError AsNoContent(RawError value) =>
        new(default, default, Optional<RawError>.Some(value), default);

    private static SearchDocumentsError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value) =>
        _disabledFeatureErrorValue.TryGetValue(out value);

    public bool TryGetMaxSearchResultsExceededError([NotNullWhen(true)] out MaxSearchResultsExceededError? value) =>
        _maxSearchResultsExceededErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DisabledFeatureError, TResult> onDisabledFeatureError,
        Func<MaxSearchResultsExceededError, TResult> onMaxSearchResultsExceededError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDisabledFeatureError(out var disabledFeatureErrorValue) => onDisabledFeatureError(
                disabledFeatureErrorValue),
            _ when TryGetMaxSearchResultsExceededError(
                out var maxSearchResultsExceededErrorValue) => onMaxSearchResultsExceededError(
                maxSearchResultsExceededErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchDocumentsError)} holds no value.")
        };

    public void Match(Action<DisabledFeatureError> onDisabledFeatureError,
        Action<MaxSearchResultsExceededError> onMaxSearchResultsExceededError,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetDisabledFeatureError(out var disabledFeatureErrorValue)) onDisabledFeatureError(
            disabledFeatureErrorValue);
        else if (TryGetMaxSearchResultsExceededError(
            out var maxSearchResultsExceededErrorValue)) onMaxSearchResultsExceededError(
            maxSearchResultsExceededErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchDocumentsError)} holds no value.");
    }

    private static Task<SearchDocumentsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<MaxSearchResultsExceededError>().As(AsMaxSearchResultsExceededError),
            403 => response.Json<DisabledFeatureError>().As(AsDisabledFeatureError),
            404 or 422 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchDocumentsError> Response { get; } = new(Create);
}
