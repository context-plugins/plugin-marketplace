using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using FacebookBusinessManager.Core.ErrorResponse;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Errors;

public sealed class CreateAdCreativeError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private CreateAdCreativeError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static CreateAdCreativeError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static CreateAdCreativeError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateAdCreativeError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateAdCreativeError)} holds no value.");
    }

    private static Task<CreateAdCreativeError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateAdCreativeError> Response { get; } = new(Create);
}
