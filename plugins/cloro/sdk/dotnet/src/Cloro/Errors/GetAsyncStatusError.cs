using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cloro.Core.ErrorResponse;
using Cloro.Core.Models;
using Cloro.Models;

namespace Cloro.Errors;

public sealed class GetAsyncStatusError : ApiError
{
    private readonly Optional<AuthenticationError> _authenticationErrorValue;

    private readonly Optional<InternalError> _internalErrorValue;

    private readonly Optional<RateLimitError> _rateLimitErrorValue;

    private GetAsyncStatusError(Optional<AuthenticationError> authenticationErrorValue,
        Optional<InternalError> internalErrorValue,
        Optional<RateLimitError> rateLimitErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationErrorValue = authenticationErrorValue;
        _internalErrorValue = internalErrorValue;
        _rateLimitErrorValue = rateLimitErrorValue;
    }

    private static GetAsyncStatusError AsAuthenticationError(AuthenticationError value) =>
        new(Optional<AuthenticationError>.Some(value), default, default, default);

    private static GetAsyncStatusError AsInternalError(InternalError value) =>
        new(default, Optional<InternalError>.Some(value), default, default);

    private static GetAsyncStatusError AsRateLimitError(RateLimitError value) =>
        new(default, default, Optional<RateLimitError>.Some(value), default);

    private static GetAsyncStatusError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationError([NotNullWhen(true)] out AuthenticationError? value) =>
        _authenticationErrorValue.TryGetValue(out value);

    public bool TryGetInternalError([NotNullWhen(true)] out InternalError? value) =>
        _internalErrorValue.TryGetValue(out value);

    public bool TryGetRateLimitError([NotNullWhen(true)] out RateLimitError? value) =>
        _rateLimitErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationError, TResult> onAuthenticationError,
        Func<InternalError, TResult> onInternalError,
        Func<RateLimitError, TResult> onRateLimitError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthenticationError(out var authenticationErrorValue) => onAuthenticationError(
                authenticationErrorValue),
            _ when TryGetInternalError(out var internalErrorValue) => onInternalError(internalErrorValue),
            _ when TryGetRateLimitError(out var rateLimitErrorValue) => onRateLimitError(rateLimitErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAsyncStatusError)} holds no value.")
        };

    public void Match(Action<AuthenticationError> onAuthenticationError,
        Action<InternalError> onInternalError,
        Action<RateLimitError> onRateLimitError,
        Action<RawError> otherwise)
    {
        if (TryGetAuthenticationError(out var authenticationErrorValue)) onAuthenticationError(
            authenticationErrorValue);
        else if (TryGetInternalError(out var internalErrorValue)) onInternalError(internalErrorValue);
        else if (TryGetRateLimitError(out var rateLimitErrorValue)) onRateLimitError(rateLimitErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAsyncStatusError)} holds no value.");
    }

    private static Task<GetAsyncStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<AuthenticationError>().As(AsAuthenticationError),
            429 => response.Json<RateLimitError>().As(AsRateLimitError),
            500 => response.Json<InternalError>().As(AsInternalError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAsyncStatusError> Response { get; } = new(Create);
}
