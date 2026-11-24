using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class DocumentsDestroyError : ApiError
{
    private readonly Optional<ApiV2Documents401Error1> _apiV2Documents401Error1Value;

    private readonly Optional<ApiV2Documents404Error1> _apiV2Documents404Error1Value;

    private DocumentsDestroyError(Optional<ApiV2Documents401Error1> apiV2Documents401Error1Value,
        Optional<ApiV2Documents404Error1> apiV2Documents404Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Documents401Error1Value = apiV2Documents401Error1Value;
        _apiV2Documents404Error1Value = apiV2Documents404Error1Value;
    }

    private static DocumentsDestroyError AsApiV2Documents401Error1(ApiV2Documents401Error1 value) =>
        new(Optional<ApiV2Documents401Error1>.Some(value), default, default);

    private static DocumentsDestroyError AsApiV2Documents404Error1(ApiV2Documents404Error1 value) =>
        new(default, Optional<ApiV2Documents404Error1>.Some(value), default);

    private static DocumentsDestroyError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Documents401Error1([NotNullWhen(true)] out ApiV2Documents401Error1? value) =>
        _apiV2Documents401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2Documents404Error1([NotNullWhen(true)] out ApiV2Documents404Error1? value) =>
        _apiV2Documents404Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Documents401Error1, TResult> onApiV2Documents401Error1,
        Func<ApiV2Documents404Error1, TResult> onApiV2Documents404Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Documents401Error1(out var apiV2Documents401Error1Value) => onApiV2Documents401Error1(
                apiV2Documents401Error1Value),
            _ when TryGetApiV2Documents404Error1(out var apiV2Documents404Error1Value) => onApiV2Documents404Error1(
                apiV2Documents404Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DocumentsDestroyError)} holds no value.")
        };

    public void Match(Action<ApiV2Documents401Error1> onApiV2Documents401Error1,
        Action<ApiV2Documents404Error1> onApiV2Documents404Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2Documents401Error1(out var apiV2Documents401Error1Value)) onApiV2Documents401Error1(
            apiV2Documents401Error1Value);
        else if (TryGetApiV2Documents404Error1(out var apiV2Documents404Error1Value)) onApiV2Documents404Error1(
            apiV2Documents404Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DocumentsDestroyError)} holds no value.");
    }

    private static Task<DocumentsDestroyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2Documents401Error1>().As(AsApiV2Documents401Error1),
            404 => response.Json<ApiV2Documents404Error1>().As(AsApiV2Documents404Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DocumentsDestroyError> Response { get; } = new(Create);
}
