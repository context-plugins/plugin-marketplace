using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Statable.Core.ErrorResponse;
using Statable.Core.Models;
using Statable.Models;

namespace Statable.Errors;

public sealed class RotateApiKeyError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private RotateApiKeyError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static RotateApiKeyError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static RotateApiKeyError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RotateApiKeyError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RotateApiKeyError)} holds no value.");
    }

    private static Task<RotateApiKeyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 404 or 409 or 429 or 500 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RotateApiKeyError> Response { get; } = new(Create);
}
