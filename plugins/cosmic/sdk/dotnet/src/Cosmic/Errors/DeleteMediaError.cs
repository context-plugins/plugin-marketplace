using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cosmic.Core.ErrorResponse;
using Cosmic.Core.Models;
using Cosmic.Models;

namespace Cosmic.Errors;

public sealed class DeleteMediaError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private DeleteMediaError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static DeleteMediaError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static DeleteMediaError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteMediaError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteMediaError)} holds no value.");
    }

    private static Task<DeleteMediaError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 402 or 404 or 429 or 500 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteMediaError> Response { get; } = new(Create);
}
