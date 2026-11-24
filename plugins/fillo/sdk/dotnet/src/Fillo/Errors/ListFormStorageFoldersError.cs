using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Fillo.Core.ErrorResponse;
using Fillo.Core.Models;
using Fillo.Models;

namespace Fillo.Errors;

public sealed class ListFormStorageFoldersError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private ListFormStorageFoldersError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static ListFormStorageFoldersError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static ListFormStorageFoldersError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListFormStorageFoldersError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListFormStorageFoldersError)} holds no value.");
    }

    private static Task<ListFormStorageFoldersError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 409 or 429 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListFormStorageFoldersError> Response { get; } = new(Create);
}
