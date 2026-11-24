using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class MergeSuggestionIntoMainDocumentError : ApiError
{
    private readonly Optional<SuggestChangeMerge400Error1> _suggestChangeMerge400Error1Value;

    private MergeSuggestionIntoMainDocumentError(Optional<SuggestChangeMerge400Error1> suggestChangeMerge400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _suggestChangeMerge400Error1Value = suggestChangeMerge400Error1Value;
    }

    private static MergeSuggestionIntoMainDocumentError AsSuggestChangeMerge400Error1(SuggestChangeMerge400Error1 value) =>
        new(Optional<SuggestChangeMerge400Error1>.Some(value), default);

    private static MergeSuggestionIntoMainDocumentError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetSuggestChangeMerge400Error1([NotNullWhen(true)] out SuggestChangeMerge400Error1? value) =>
        _suggestChangeMerge400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<SuggestChangeMerge400Error1, TResult> onSuggestChangeMerge400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSuggestChangeMerge400Error1(
                out var suggestChangeMerge400Error1Value) => onSuggestChangeMerge400Error1(
                suggestChangeMerge400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MergeSuggestionIntoMainDocumentError)} holds no value.")
        };

    public void Match(Action<SuggestChangeMerge400Error1> onSuggestChangeMerge400Error1, Action<RawError> otherwise)
    {
        if (TryGetSuggestChangeMerge400Error1(out var suggestChangeMerge400Error1Value)) onSuggestChangeMerge400Error1(
            suggestChangeMerge400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MergeSuggestionIntoMainDocumentError)} holds no value.");
    }

    private static Task<MergeSuggestionIntoMainDocumentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<SuggestChangeMerge400Error1>().As(AsSuggestChangeMerge400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MergeSuggestionIntoMainDocumentError> Response { get; } = new(Create);
}
