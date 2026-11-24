using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class RecognizeTextError : ApiError
{
    private readonly Optional<AccessDeniedException> _accessDeniedExceptionValue;

    private readonly Optional<BadGatewayException> _badGatewayExceptionValue;

    private readonly Optional<DependencyFailedException> _dependencyFailedExceptionValue;

    private readonly Optional<RuntimeV2LexConflictException> _runtimeV2LexConflictExceptionValue;

    private readonly Optional<RuntimeV2LexInternalServerException> _runtimeV2LexInternalServerExceptionValue;

    private readonly Optional<RuntimeV2LexResourceNotFoundException> _runtimeV2LexResourceNotFoundExceptionValue;

    private readonly Optional<RuntimeV2LexThrottlingException> _runtimeV2LexThrottlingExceptionValue;

    private readonly Optional<RuntimeV2LexValidationException> _runtimeV2LexValidationExceptionValue;

    private RecognizeTextError(Optional<AccessDeniedException> accessDeniedExceptionValue,
        Optional<BadGatewayException> badGatewayExceptionValue,
        Optional<DependencyFailedException> dependencyFailedExceptionValue,
        Optional<RuntimeV2LexConflictException> runtimeV2LexConflictExceptionValue,
        Optional<RuntimeV2LexInternalServerException> runtimeV2LexInternalServerExceptionValue,
        Optional<RuntimeV2LexResourceNotFoundException> runtimeV2LexResourceNotFoundExceptionValue,
        Optional<RuntimeV2LexThrottlingException> runtimeV2LexThrottlingExceptionValue,
        Optional<RuntimeV2LexValidationException> runtimeV2LexValidationExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _accessDeniedExceptionValue = accessDeniedExceptionValue;
        _badGatewayExceptionValue = badGatewayExceptionValue;
        _dependencyFailedExceptionValue = dependencyFailedExceptionValue;
        _runtimeV2LexConflictExceptionValue = runtimeV2LexConflictExceptionValue;
        _runtimeV2LexInternalServerExceptionValue = runtimeV2LexInternalServerExceptionValue;
        _runtimeV2LexResourceNotFoundExceptionValue = runtimeV2LexResourceNotFoundExceptionValue;
        _runtimeV2LexThrottlingExceptionValue = runtimeV2LexThrottlingExceptionValue;
        _runtimeV2LexValidationExceptionValue = runtimeV2LexValidationExceptionValue;
    }

    private static RecognizeTextError AsAccessDeniedException(AccessDeniedException value) =>
        new(
            Optional<AccessDeniedException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static RecognizeTextError AsBadGatewayException(BadGatewayException value) =>
        new(
            default,
            Optional<BadGatewayException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static RecognizeTextError AsDependencyFailedException(DependencyFailedException value) =>
        new(
            default,
            default,
            Optional<DependencyFailedException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static RecognizeTextError AsRuntimeV2LexConflictException(RuntimeV2LexConflictException value) =>
        new(
            default,
            default,
            default,
            Optional<RuntimeV2LexConflictException>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static RecognizeTextError AsRuntimeV2LexInternalServerException(RuntimeV2LexInternalServerException value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<RuntimeV2LexInternalServerException>.Some(value),
            default,
            default,
            default,
            default);

    private static RecognizeTextError AsRuntimeV2LexResourceNotFoundException(RuntimeV2LexResourceNotFoundException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<RuntimeV2LexResourceNotFoundException>.Some(value),
            default,
            default,
            default);

    private static RecognizeTextError AsRuntimeV2LexThrottlingException(RuntimeV2LexThrottlingException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RuntimeV2LexThrottlingException>.Some(value),
            default,
            default);

    private static RecognizeTextError AsRuntimeV2LexValidationException(RuntimeV2LexValidationException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RuntimeV2LexValidationException>.Some(value),
            default);

    private static RecognizeTextError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value) =>
        _accessDeniedExceptionValue.TryGetValue(out value);

    public bool TryGetBadGatewayException([NotNullWhen(true)] out BadGatewayException? value) =>
        _badGatewayExceptionValue.TryGetValue(out value);

    public bool TryGetDependencyFailedException([NotNullWhen(true)] out DependencyFailedException? value) =>
        _dependencyFailedExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeV2LexConflictException([NotNullWhen(true)] out RuntimeV2LexConflictException? value) =>
        _runtimeV2LexConflictExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeV2LexInternalServerException([NotNullWhen(true)] out RuntimeV2LexInternalServerException? value) =>
        _runtimeV2LexInternalServerExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeV2LexResourceNotFoundException([NotNullWhen(true)] out RuntimeV2LexResourceNotFoundException? value) =>
        _runtimeV2LexResourceNotFoundExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeV2LexThrottlingException([NotNullWhen(true)] out RuntimeV2LexThrottlingException? value) =>
        _runtimeV2LexThrottlingExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeV2LexValidationException([NotNullWhen(true)] out RuntimeV2LexValidationException? value) =>
        _runtimeV2LexValidationExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AccessDeniedException, TResult> onAccessDeniedException,
        Func<BadGatewayException, TResult> onBadGatewayException,
        Func<DependencyFailedException, TResult> onDependencyFailedException,
        Func<RuntimeV2LexConflictException, TResult> onRuntimeV2LexConflictException,
        Func<RuntimeV2LexInternalServerException, TResult> onRuntimeV2LexInternalServerException,
        Func<RuntimeV2LexResourceNotFoundException, TResult> onRuntimeV2LexResourceNotFoundException,
        Func<RuntimeV2LexThrottlingException, TResult> onRuntimeV2LexThrottlingException,
        Func<RuntimeV2LexValidationException, TResult> onRuntimeV2LexValidationException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccessDeniedException(out var accessDeniedExceptionValue) => onAccessDeniedException(
                accessDeniedExceptionValue),
            _ when TryGetBadGatewayException(out var badGatewayExceptionValue) => onBadGatewayException(
                badGatewayExceptionValue),
            _ when TryGetDependencyFailedException(
                out var dependencyFailedExceptionValue) => onDependencyFailedException(dependencyFailedExceptionValue),
            _ when TryGetRuntimeV2LexConflictException(
                out var runtimeV2LexConflictExceptionValue) => onRuntimeV2LexConflictException(
                runtimeV2LexConflictExceptionValue),
            _ when TryGetRuntimeV2LexInternalServerException(
                out var runtimeV2LexInternalServerExceptionValue) => onRuntimeV2LexInternalServerException(
                runtimeV2LexInternalServerExceptionValue),
            _ when TryGetRuntimeV2LexResourceNotFoundException(
                out var runtimeV2LexResourceNotFoundExceptionValue) => onRuntimeV2LexResourceNotFoundException(
                runtimeV2LexResourceNotFoundExceptionValue),
            _ when TryGetRuntimeV2LexThrottlingException(
                out var runtimeV2LexThrottlingExceptionValue) => onRuntimeV2LexThrottlingException(
                runtimeV2LexThrottlingExceptionValue),
            _ when TryGetRuntimeV2LexValidationException(
                out var runtimeV2LexValidationExceptionValue) => onRuntimeV2LexValidationException(
                runtimeV2LexValidationExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RecognizeTextError)} holds no value.")
        };

    public void Match(Action<AccessDeniedException> onAccessDeniedException,
        Action<BadGatewayException> onBadGatewayException,
        Action<DependencyFailedException> onDependencyFailedException,
        Action<RuntimeV2LexConflictException> onRuntimeV2LexConflictException,
        Action<RuntimeV2LexInternalServerException> onRuntimeV2LexInternalServerException,
        Action<RuntimeV2LexResourceNotFoundException> onRuntimeV2LexResourceNotFoundException,
        Action<RuntimeV2LexThrottlingException> onRuntimeV2LexThrottlingException,
        Action<RuntimeV2LexValidationException> onRuntimeV2LexValidationException,
        Action<RawError> otherwise)
    {
        if (TryGetAccessDeniedException(out var accessDeniedExceptionValue)) onAccessDeniedException(
            accessDeniedExceptionValue);
        else if (TryGetBadGatewayException(out var badGatewayExceptionValue)) onBadGatewayException(
            badGatewayExceptionValue);
        else if (TryGetDependencyFailedException(out var dependencyFailedExceptionValue)) onDependencyFailedException(
            dependencyFailedExceptionValue);
        else if (TryGetRuntimeV2LexConflictException(
            out var runtimeV2LexConflictExceptionValue)) onRuntimeV2LexConflictException(
            runtimeV2LexConflictExceptionValue);
        else if (TryGetRuntimeV2LexInternalServerException(
            out var runtimeV2LexInternalServerExceptionValue)) onRuntimeV2LexInternalServerException(
            runtimeV2LexInternalServerExceptionValue);
        else if (TryGetRuntimeV2LexResourceNotFoundException(
            out var runtimeV2LexResourceNotFoundExceptionValue)) onRuntimeV2LexResourceNotFoundException(
            runtimeV2LexResourceNotFoundExceptionValue);
        else if (TryGetRuntimeV2LexThrottlingException(
            out var runtimeV2LexThrottlingExceptionValue)) onRuntimeV2LexThrottlingException(
            runtimeV2LexThrottlingExceptionValue);
        else if (TryGetRuntimeV2LexValidationException(
            out var runtimeV2LexValidationExceptionValue)) onRuntimeV2LexValidationException(
            runtimeV2LexValidationExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RecognizeTextError)} holds no value.");
    }

    private static Task<RecognizeTextError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<RuntimeV2LexValidationException>().As(AsRuntimeV2LexValidationException),
            403 => response.Json<AccessDeniedException>().As(AsAccessDeniedException),
            404 => response.Json<RuntimeV2LexResourceNotFoundException>().As(AsRuntimeV2LexResourceNotFoundException),
            409 => response.Json<RuntimeV2LexConflictException>().As(AsRuntimeV2LexConflictException),
            424 => response.Json<DependencyFailedException>().As(AsDependencyFailedException),
            429 => response.Json<RuntimeV2LexThrottlingException>().As(AsRuntimeV2LexThrottlingException),
            500 => response.Json<RuntimeV2LexInternalServerException>().As(AsRuntimeV2LexInternalServerException),
            502 => response.Json<BadGatewayException>().As(AsBadGatewayException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RecognizeTextError> Response { get; } = new(Create);
}
