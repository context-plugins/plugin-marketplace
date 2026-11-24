using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class SearchDocumentError : ApiError
{
    private readonly Optional<DocsSearch400Error1> _docsSearch400Error1Value;

    private SearchDocumentError(Optional<DocsSearch400Error1> docsSearch400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _docsSearch400Error1Value = docsSearch400Error1Value;
    }

    private static SearchDocumentError AsDocsSearch400Error1(DocsSearch400Error1 value) =>
        new(Optional<DocsSearch400Error1>.Some(value), default);

    private static SearchDocumentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetDocsSearch400Error1([NotNullWhen(true)] out DocsSearch400Error1? value) =>
        _docsSearch400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<DocsSearch400Error1, TResult> onDocsSearch400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDocsSearch400Error1(out var docsSearch400Error1Value) => onDocsSearch400Error1(
                docsSearch400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchDocumentError)} holds no value.")
        };

    public void Match(Action<DocsSearch400Error1> onDocsSearch400Error1, Action<RawError> otherwise)
    {
        if (TryGetDocsSearch400Error1(out var docsSearch400Error1Value)) onDocsSearch400Error1(
            docsSearch400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchDocumentError)} holds no value.");
    }

    private static Task<SearchDocumentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<DocsSearch400Error1>().As(AsDocsSearch400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchDocumentError> Response { get; } = new(Create);
}
