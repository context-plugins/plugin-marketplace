using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class DocumentsIndexError : ApiError
{
    private readonly Optional<ApiV2Documents401Error1> _apiV2Documents401Error1Value;

    private DocumentsIndexError(Optional<ApiV2Documents401Error1> apiV2Documents401Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Documents401Error1Value = apiV2Documents401Error1Value;
    }

    private static DocumentsIndexError AsApiV2Documents401Error1(ApiV2Documents401Error1 value) =>
        new(Optional<ApiV2Documents401Error1>.Some(value), default);

    private static DocumentsIndexError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Documents401Error1([NotNullWhen(true)] out ApiV2Documents401Error1? value) =>
        _apiV2Documents401Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Documents401Error1, TResult> onApiV2Documents401Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Documents401Error1(out var apiV2Documents401Error1Value) => onApiV2Documents401Error1(
                apiV2Documents401Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DocumentsIndexError)} holds no value.")
        };

    public void Match(Action<ApiV2Documents401Error1> onApiV2Documents401Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV2Documents401Error1(out var apiV2Documents401Error1Value)) onApiV2Documents401Error1(
            apiV2Documents401Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DocumentsIndexError)} holds no value.");
    }

    private static Task<DocumentsIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2Documents401Error1>().As(AsApiV2Documents401Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DocumentsIndexError> Response { get; } = new(Create);
}
