using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Instacart.Core.ErrorResponse;
using Instacart.Core.Models;
using Instacart.Models;

namespace Instacart.Errors;

public sealed class SendChatMessageError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private SendChatMessageError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static SendChatMessageError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static SendChatMessageError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SendChatMessageError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SendChatMessageError)} holds no value.");
    }

    private static Task<SendChatMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SendChatMessageError> Response { get; } = new(Create);
}
