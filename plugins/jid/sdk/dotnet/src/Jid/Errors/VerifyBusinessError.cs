using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Jid.Core.ErrorResponse;
using Jid.Core.Models;
using Jid.Models;

namespace Jid.Errors;

public sealed class VerifyBusinessError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private VerifyBusinessError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static VerifyBusinessError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static VerifyBusinessError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(VerifyBusinessError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(VerifyBusinessError)} holds no value.");
    }

    private static Task<VerifyBusinessError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 402 or 404 or 429 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<VerifyBusinessError> Response { get; } = new(Create);
}
