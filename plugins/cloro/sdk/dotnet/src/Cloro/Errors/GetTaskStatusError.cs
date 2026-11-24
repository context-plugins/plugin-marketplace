using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cloro.Core.ErrorResponse;
using Cloro.Core.Models;
using Cloro.Models;

namespace Cloro.Errors;

public sealed class GetTaskStatusError : ApiError
{
    private readonly Optional<AuthenticationError> _authenticationErrorValue;

    private readonly Optional<InternalError> _internalErrorValue;

    private readonly Optional<NotFoundError> _notFoundErrorValue;

    private readonly Optional<RateLimitError> _rateLimitErrorValue;

    private GetTaskStatusError(Optional<AuthenticationError> authenticationErrorValue,
        Optional<InternalError> internalErrorValue,
        Optional<NotFoundError> notFoundErrorValue,
        Optional<RateLimitError> rateLimitErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationErrorValue = authenticationErrorValue;
        _internalErrorValue = internalErrorValue;
        _notFoundErrorValue = notFoundErrorValue;
        _rateLimitErrorValue = rateLimitErrorValue;
    }

    private static GetTaskStatusError AsAuthenticationError(AuthenticationError value) =>
        new(Optional<AuthenticationError>.Some(value), default, default, default, default);

    private static GetTaskStatusError AsInternalError(InternalError value) =>
        new(default, Optional<InternalError>.Some(value), default, default, default);

    private static GetTaskStatusError AsNotFoundError(NotFoundError value) =>
        new(default, default, Optional<NotFoundError>.Some(value), default, default);

    private static GetTaskStatusError AsRateLimitError(RateLimitError value) =>
        new(default, default, default, Optional<RateLimitError>.Some(value), default);

    private static GetTaskStatusError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationError([NotNullWhen(true)] out AuthenticationError? value) =>
        _authenticationErrorValue.TryGetValue(out value);

    public bool TryGetInternalError([NotNullWhen(true)] out InternalError? value) =>
        _internalErrorValue.TryGetValue(out value);

    public bool TryGetNotFoundError([NotNullWhen(true)] out NotFoundError? value) =>
        _notFoundErrorValue.TryGetValue(out value);

    public bool TryGetRateLimitError([NotNullWhen(true)] out RateLimitError? value) =>
        _rateLimitErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationError, TResult> onAuthenticationError,
        Func<InternalError, TResult> onInternalError,
        Func<NotFoundError, TResult> onNotFoundError,
        Func<RateLimitError, TResult> onRateLimitError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthenticationError(out var authenticationErrorValue) => onAuthenticationError(
                authenticationErrorValue),
            _ when TryGetInternalError(out var internalErrorValue) => onInternalError(internalErrorValue),
            _ when TryGetNotFoundError(out var notFoundErrorValue) => onNotFoundError(notFoundErrorValue),
            _ when TryGetRateLimitError(out var rateLimitErrorValue) => onRateLimitError(rateLimitErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetTaskStatusError)} holds no value.")
        };

    public void Match(Action<AuthenticationError> onAuthenticationError,
        Action<InternalError> onInternalError,
        Action<NotFoundError> onNotFoundError,
        Action<RateLimitError> onRateLimitError,
        Action<RawError> otherwise)
    {
        if (TryGetAuthenticationError(out var authenticationErrorValue)) onAuthenticationError(
            authenticationErrorValue);
        else if (TryGetInternalError(out var internalErrorValue)) onInternalError(internalErrorValue);
        else if (TryGetNotFoundError(out var notFoundErrorValue)) onNotFoundError(notFoundErrorValue);
        else if (TryGetRateLimitError(out var rateLimitErrorValue)) onRateLimitError(rateLimitErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetTaskStatusError)} holds no value.");
    }

    private static Task<GetTaskStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<AuthenticationError>().As(AsAuthenticationError),
            404 => response.Json<NotFoundError>().As(AsNotFoundError),
            429 => response.Json<RateLimitError>().As(AsRateLimitError),
            500 => response.Json<InternalError>().As(AsInternalError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetTaskStatusError> Response { get; } = new(Create);
}
