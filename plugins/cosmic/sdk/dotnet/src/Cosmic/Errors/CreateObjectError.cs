using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cosmic.Core.ErrorResponse;
using Cosmic.Core.Models;
using Cosmic.Models;

namespace Cosmic.Errors;

public sealed class CreateObjectError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private CreateObjectError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static CreateObjectError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static CreateObjectError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateObjectError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateObjectError)} holds no value.");
    }

    private static Task<CreateObjectError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 402 or 404 or 429 or 500 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateObjectError> Response { get; } = new(Create);
}
