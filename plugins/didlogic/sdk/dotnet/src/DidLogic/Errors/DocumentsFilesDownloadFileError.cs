using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class DocumentsFilesDownloadFileError : ApiError
{
    private readonly Optional<ApiV2DocumentsFiles401Error1> _apiV2DocumentsFiles401Error1Value;

    private readonly Optional<Error> _errorValue;

    private DocumentsFilesDownloadFileError(Optional<ApiV2DocumentsFiles401Error1> apiV2DocumentsFiles401Error1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2DocumentsFiles401Error1Value = apiV2DocumentsFiles401Error1Value;
        _errorValue = errorValue;
    }

    private static DocumentsFilesDownloadFileError AsApiV2DocumentsFiles401Error1(ApiV2DocumentsFiles401Error1 value) =>
        new(Optional<ApiV2DocumentsFiles401Error1>.Some(value), default, default);

    private static DocumentsFilesDownloadFileError AsError(Error value) =>
        new(default, Optional<Error>.Some(value), default);

    private static DocumentsFilesDownloadFileError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2DocumentsFiles401Error1([NotNullWhen(true)] out ApiV2DocumentsFiles401Error1? value) =>
        _apiV2DocumentsFiles401Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2DocumentsFiles401Error1, TResult> onApiV2DocumentsFiles401Error1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2DocumentsFiles401Error1(
                out var apiV2DocumentsFiles401Error1Value) => onApiV2DocumentsFiles401Error1(
                apiV2DocumentsFiles401Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DocumentsFilesDownloadFileError)} holds no value.")
        };

    public void Match(Action<ApiV2DocumentsFiles401Error1> onApiV2DocumentsFiles401Error1,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2DocumentsFiles401Error1(
            out var apiV2DocumentsFiles401Error1Value)) onApiV2DocumentsFiles401Error1(
            apiV2DocumentsFiles401Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DocumentsFilesDownloadFileError)} holds no value.");
    }

    private static Task<DocumentsFilesDownloadFileError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2DocumentsFiles401Error1>().As(AsApiV2DocumentsFiles401Error1),
            404 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DocumentsFilesDownloadFileError> Response { get; } = new(Create);
}
