using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class DocumentsCreateError : ApiError
{
    private readonly Optional<ApiV2Documents401Error1> _apiV2Documents401Error1Value;

    private readonly Optional<Error> _errorValue;

    private DocumentsCreateError(Optional<ApiV2Documents401Error1> apiV2Documents401Error1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Documents401Error1Value = apiV2Documents401Error1Value;
        _errorValue = errorValue;
    }

    private static DocumentsCreateError AsApiV2Documents401Error1(ApiV2Documents401Error1 value) =>
        new(Optional<ApiV2Documents401Error1>.Some(value), default, default);

    private static DocumentsCreateError AsError(Error value) => new(default, Optional<Error>.Some(value), default);

    private static DocumentsCreateError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Documents401Error1([NotNullWhen(true)] out ApiV2Documents401Error1? value) =>
        _apiV2Documents401Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Documents401Error1, TResult> onApiV2Documents401Error1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Documents401Error1(out var apiV2Documents401Error1Value) => onApiV2Documents401Error1(
                apiV2Documents401Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DocumentsCreateError)} holds no value.")
        };

    public void Match(Action<ApiV2Documents401Error1> onApiV2Documents401Error1,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2Documents401Error1(out var apiV2Documents401Error1Value)) onApiV2Documents401Error1(
            apiV2Documents401Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DocumentsCreateError)} holds no value.");
    }

    private static Task<DocumentsCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2Documents401Error1>().As(AsApiV2Documents401Error1),
            422 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DocumentsCreateError> Response { get; } = new(Create);
}
