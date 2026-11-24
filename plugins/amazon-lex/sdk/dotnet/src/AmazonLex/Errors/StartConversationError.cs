using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class StartConversationError : ApiError
{
    private readonly Optional<AccessDeniedException> _accessDeniedExceptionValue;

    private readonly Optional<RuntimeV2LexInternalServerException> _runtimeV2LexInternalServerExceptionValue;

    private readonly Optional<RuntimeV2LexThrottlingException> _runtimeV2LexThrottlingExceptionValue;

    private readonly Optional<RuntimeV2LexValidationException> _runtimeV2LexValidationExceptionValue;

    private StartConversationError(Optional<AccessDeniedException> accessDeniedExceptionValue,
        Optional<RuntimeV2LexInternalServerException> runtimeV2LexInternalServerExceptionValue,
        Optional<RuntimeV2LexThrottlingException> runtimeV2LexThrottlingExceptionValue,
        Optional<RuntimeV2LexValidationException> runtimeV2LexValidationExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _accessDeniedExceptionValue = accessDeniedExceptionValue;
        _runtimeV2LexInternalServerExceptionValue = runtimeV2LexInternalServerExceptionValue;
        _runtimeV2LexThrottlingExceptionValue = runtimeV2LexThrottlingExceptionValue;
        _runtimeV2LexValidationExceptionValue = runtimeV2LexValidationExceptionValue;
    }

    private static StartConversationError AsAccessDeniedException(AccessDeniedException value) =>
        new(Optional<AccessDeniedException>.Some(value), default, default, default, default);

    private static StartConversationError AsRuntimeV2LexInternalServerException(RuntimeV2LexInternalServerException value) =>
        new(default, Optional<RuntimeV2LexInternalServerException>.Some(value), default, default, default);

    private static StartConversationError AsRuntimeV2LexThrottlingException(RuntimeV2LexThrottlingException value) =>
        new(default, default, Optional<RuntimeV2LexThrottlingException>.Some(value), default, default);

    private static StartConversationError AsRuntimeV2LexValidationException(RuntimeV2LexValidationException value) =>
        new(default, default, default, Optional<RuntimeV2LexValidationException>.Some(value), default);

    private static StartConversationError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value) =>
        _accessDeniedExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeV2LexInternalServerException([NotNullWhen(true)] out RuntimeV2LexInternalServerException? value) =>
        _runtimeV2LexInternalServerExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeV2LexThrottlingException([NotNullWhen(true)] out RuntimeV2LexThrottlingException? value) =>
        _runtimeV2LexThrottlingExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeV2LexValidationException([NotNullWhen(true)] out RuntimeV2LexValidationException? value) =>
        _runtimeV2LexValidationExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AccessDeniedException, TResult> onAccessDeniedException,
        Func<RuntimeV2LexInternalServerException, TResult> onRuntimeV2LexInternalServerException,
        Func<RuntimeV2LexThrottlingException, TResult> onRuntimeV2LexThrottlingException,
        Func<RuntimeV2LexValidationException, TResult> onRuntimeV2LexValidationException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccessDeniedException(out var accessDeniedExceptionValue) => onAccessDeniedException(
                accessDeniedExceptionValue),
            _ when TryGetRuntimeV2LexInternalServerException(
                out var runtimeV2LexInternalServerExceptionValue) => onRuntimeV2LexInternalServerException(
                runtimeV2LexInternalServerExceptionValue),
            _ when TryGetRuntimeV2LexThrottlingException(
                out var runtimeV2LexThrottlingExceptionValue) => onRuntimeV2LexThrottlingException(
                runtimeV2LexThrottlingExceptionValue),
            _ when TryGetRuntimeV2LexValidationException(
                out var runtimeV2LexValidationExceptionValue) => onRuntimeV2LexValidationException(
                runtimeV2LexValidationExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(StartConversationError)} holds no value.")
        };

    public void Match(Action<AccessDeniedException> onAccessDeniedException,
        Action<RuntimeV2LexInternalServerException> onRuntimeV2LexInternalServerException,
        Action<RuntimeV2LexThrottlingException> onRuntimeV2LexThrottlingException,
        Action<RuntimeV2LexValidationException> onRuntimeV2LexValidationException,
        Action<RawError> otherwise)
    {
        if (TryGetAccessDeniedException(out var accessDeniedExceptionValue)) onAccessDeniedException(
            accessDeniedExceptionValue);
        else if (TryGetRuntimeV2LexInternalServerException(
            out var runtimeV2LexInternalServerExceptionValue)) onRuntimeV2LexInternalServerException(
            runtimeV2LexInternalServerExceptionValue);
        else if (TryGetRuntimeV2LexThrottlingException(
            out var runtimeV2LexThrottlingExceptionValue)) onRuntimeV2LexThrottlingException(
            runtimeV2LexThrottlingExceptionValue);
        else if (TryGetRuntimeV2LexValidationException(
            out var runtimeV2LexValidationExceptionValue)) onRuntimeV2LexValidationException(
            runtimeV2LexValidationExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(StartConversationError)} holds no value.");
    }

    private static Task<StartConversationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<RuntimeV2LexValidationException>().As(AsRuntimeV2LexValidationException),
            403 => response.Json<AccessDeniedException>().As(AsAccessDeniedException),
            429 => response.Json<RuntimeV2LexThrottlingException>().As(AsRuntimeV2LexThrottlingException),
            500 => response.Json<RuntimeV2LexInternalServerException>().As(AsRuntimeV2LexInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<StartConversationError> Response { get; } = new(Create);
}
