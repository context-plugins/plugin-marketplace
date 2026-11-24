using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cloro.Core.ErrorResponse;
using Cloro.Core.Models;
using Cloro.Models;

namespace Cloro.Errors;

public sealed class CreateAsyncTaskError : ApiError
{
    private readonly Optional<AuthenticationError> _authenticationErrorValue;

    private readonly Optional<ForbiddenError> _forbiddenErrorValue;

    private readonly Optional<IdempotencyConflictError> _idempotencyConflictErrorValue;

    private readonly Optional<InternalError> _internalErrorValue;

    private readonly Optional<QueueLimitError> _queueLimitErrorValue;

    private readonly Optional<ValidationError> _validationErrorValue;

    private CreateAsyncTaskError(Optional<AuthenticationError> authenticationErrorValue,
        Optional<ForbiddenError> forbiddenErrorValue,
        Optional<IdempotencyConflictError> idempotencyConflictErrorValue,
        Optional<InternalError> internalErrorValue,
        Optional<QueueLimitError> queueLimitErrorValue,
        Optional<ValidationError> validationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationErrorValue = authenticationErrorValue;
        _forbiddenErrorValue = forbiddenErrorValue;
        _idempotencyConflictErrorValue = idempotencyConflictErrorValue;
        _internalErrorValue = internalErrorValue;
        _queueLimitErrorValue = queueLimitErrorValue;
        _validationErrorValue = validationErrorValue;
    }

    private static CreateAsyncTaskError AsAuthenticationError(AuthenticationError value) =>
        new(Optional<AuthenticationError>.Some(value), default, default, default, default, default, default);

    private static CreateAsyncTaskError AsForbiddenError(ForbiddenError value) =>
        new(default, Optional<ForbiddenError>.Some(value), default, default, default, default, default);

    private static CreateAsyncTaskError AsIdempotencyConflictError(IdempotencyConflictError value) =>
        new(default, default, Optional<IdempotencyConflictError>.Some(value), default, default, default, default);

    private static CreateAsyncTaskError AsInternalError(InternalError value) =>
        new(default, default, default, Optional<InternalError>.Some(value), default, default, default);

    private static CreateAsyncTaskError AsQueueLimitError(QueueLimitError value) =>
        new(default, default, default, default, Optional<QueueLimitError>.Some(value), default, default);

    private static CreateAsyncTaskError AsValidationError(ValidationError value) =>
        new(default, default, default, default, default, Optional<ValidationError>.Some(value), default);

    private static CreateAsyncTaskError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationError([NotNullWhen(true)] out AuthenticationError? value) =>
        _authenticationErrorValue.TryGetValue(out value);

    public bool TryGetForbiddenError([NotNullWhen(true)] out ForbiddenError? value) =>
        _forbiddenErrorValue.TryGetValue(out value);

    public bool TryGetIdempotencyConflictError([NotNullWhen(true)] out IdempotencyConflictError? value) =>
        _idempotencyConflictErrorValue.TryGetValue(out value);

    public bool TryGetInternalError([NotNullWhen(true)] out InternalError? value) =>
        _internalErrorValue.TryGetValue(out value);

    public bool TryGetQueueLimitError([NotNullWhen(true)] out QueueLimitError? value) =>
        _queueLimitErrorValue.TryGetValue(out value);

    public bool TryGetValidationError([NotNullWhen(true)] out ValidationError? value) =>
        _validationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationError, TResult> onAuthenticationError,
        Func<ForbiddenError, TResult> onForbiddenError,
        Func<IdempotencyConflictError, TResult> onIdempotencyConflictError,
        Func<InternalError, TResult> onInternalError,
        Func<QueueLimitError, TResult> onQueueLimitError,
        Func<ValidationError, TResult> onValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthenticationError(out var authenticationErrorValue) => onAuthenticationError(
                authenticationErrorValue),
            _ when TryGetForbiddenError(out var forbiddenErrorValue) => onForbiddenError(forbiddenErrorValue),
            _ when TryGetIdempotencyConflictError(out var idempotencyConflictErrorValue) => onIdempotencyConflictError(
                idempotencyConflictErrorValue),
            _ when TryGetInternalError(out var internalErrorValue) => onInternalError(internalErrorValue),
            _ when TryGetQueueLimitError(out var queueLimitErrorValue) => onQueueLimitError(queueLimitErrorValue),
            _ when TryGetValidationError(out var validationErrorValue) => onValidationError(validationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateAsyncTaskError)} holds no value.")
        };

    public void Match(Action<AuthenticationError> onAuthenticationError,
        Action<ForbiddenError> onForbiddenError,
        Action<IdempotencyConflictError> onIdempotencyConflictError,
        Action<InternalError> onInternalError,
        Action<QueueLimitError> onQueueLimitError,
        Action<ValidationError> onValidationError,
        Action<RawError> otherwise)
    {
        if (TryGetAuthenticationError(out var authenticationErrorValue)) onAuthenticationError(
            authenticationErrorValue);
        else if (TryGetForbiddenError(out var forbiddenErrorValue)) onForbiddenError(forbiddenErrorValue);
        else if (TryGetIdempotencyConflictError(out var idempotencyConflictErrorValue)) onIdempotencyConflictError(
            idempotencyConflictErrorValue);
        else if (TryGetInternalError(out var internalErrorValue)) onInternalError(internalErrorValue);
        else if (TryGetQueueLimitError(out var queueLimitErrorValue)) onQueueLimitError(queueLimitErrorValue);
        else if (TryGetValidationError(out var validationErrorValue)) onValidationError(validationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateAsyncTaskError)} holds no value.");
    }

    private static Task<CreateAsyncTaskError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationError>().As(AsValidationError),
            401 => response.Json<AuthenticationError>().As(AsAuthenticationError),
            403 => response.Json<ForbiddenError>().As(AsForbiddenError),
            409 => response.Json<IdempotencyConflictError>().As(AsIdempotencyConflictError),
            429 => response.Json<QueueLimitError>().As(AsQueueLimitError),
            500 => response.Json<InternalError>().As(AsInternalError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateAsyncTaskError> Response { get; } = new(Create);
}
