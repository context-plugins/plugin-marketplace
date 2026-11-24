using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CallNode.Core.ErrorResponse;
using CallNode.Core.Models;
using CallNode.Models;

namespace CallNode.Errors;

public sealed class CreateEmailDomainError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private CreateEmailDomainError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static CreateEmailDomainError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static CreateEmailDomainError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateEmailDomainError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateEmailDomainError)} holds no value.");
    }

    private static Task<CreateEmailDomainError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 409 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateEmailDomainError> Response { get; } = new(Create);
}
