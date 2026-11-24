using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class DiscardSuggestionDocumentError : ApiError
{
    private readonly Optional<SuggestChangeDiscard400Error1> _suggestChangeDiscard400Error1Value;

    private DiscardSuggestionDocumentError(Optional<SuggestChangeDiscard400Error1> suggestChangeDiscard400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _suggestChangeDiscard400Error1Value = suggestChangeDiscard400Error1Value;
    }

    private static DiscardSuggestionDocumentError AsSuggestChangeDiscard400Error1(SuggestChangeDiscard400Error1 value) =>
        new(Optional<SuggestChangeDiscard400Error1>.Some(value), default);

    private static DiscardSuggestionDocumentError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetSuggestChangeDiscard400Error1([NotNullWhen(true)] out SuggestChangeDiscard400Error1? value) =>
        _suggestChangeDiscard400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<SuggestChangeDiscard400Error1, TResult> onSuggestChangeDiscard400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSuggestChangeDiscard400Error1(
                out var suggestChangeDiscard400Error1Value) => onSuggestChangeDiscard400Error1(
                suggestChangeDiscard400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DiscardSuggestionDocumentError)} holds no value.")
        };

    public void Match(Action<SuggestChangeDiscard400Error1> onSuggestChangeDiscard400Error1, Action<RawError> otherwise)
    {
        if (TryGetSuggestChangeDiscard400Error1(
            out var suggestChangeDiscard400Error1Value)) onSuggestChangeDiscard400Error1(
            suggestChangeDiscard400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DiscardSuggestionDocumentError)} holds no value.");
    }

    private static Task<DiscardSuggestionDocumentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<SuggestChangeDiscard400Error1>().As(AsSuggestChangeDiscard400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DiscardSuggestionDocumentError> Response { get; } = new(Create);
}
