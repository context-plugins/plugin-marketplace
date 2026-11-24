using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class PostContentError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<ConflictException> _conflictExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private readonly Optional<LoopDetectedException> _loopDetectedExceptionValue;

    private readonly Optional<NotAcceptableException> _notAcceptableExceptionValue;

    private readonly Optional<NotFoundException> _notFoundExceptionValue;

    private readonly Optional<RequestTimeoutException> _requestTimeoutExceptionValue;

    private readonly Optional<RuntimeLexBadGatewayException> _runtimeLexBadGatewayExceptionValue;

    private readonly Optional<RuntimeLexDependencyFailedException> _runtimeLexDependencyFailedExceptionValue;

    private readonly Optional<UnsupportedMediaTypeException> _unsupportedMediaTypeExceptionValue;

    private PostContentError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<ConflictException> conflictExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<LoopDetectedException> loopDetectedExceptionValue,
        Optional<NotAcceptableException> notAcceptableExceptionValue,
        Optional<NotFoundException> notFoundExceptionValue,
        Optional<RequestTimeoutException> requestTimeoutExceptionValue,
        Optional<RuntimeLexBadGatewayException> runtimeLexBadGatewayExceptionValue,
        Optional<RuntimeLexDependencyFailedException> runtimeLexDependencyFailedExceptionValue,
        Optional<UnsupportedMediaTypeException> unsupportedMediaTypeExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _conflictExceptionValue = conflictExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
        _loopDetectedExceptionValue = loopDetectedExceptionValue;
        _notAcceptableExceptionValue = notAcceptableExceptionValue;
        _notFoundExceptionValue = notFoundExceptionValue;
        _requestTimeoutExceptionValue = requestTimeoutExceptionValue;
        _runtimeLexBadGatewayExceptionValue = runtimeLexBadGatewayExceptionValue;
        _runtimeLexDependencyFailedExceptionValue = runtimeLexDependencyFailedExceptionValue;
        _unsupportedMediaTypeExceptionValue = unsupportedMediaTypeExceptionValue;
    }

    private static PostContentError AsBadRequestException(BadRequestException value) =>
        new(
            Optional<BadRequestException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostContentError AsConflictException(ConflictException value) =>
        new(
            default,
            Optional<ConflictException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostContentError AsInternalFailureException(InternalFailureException value) =>
        new(
            default,
            default,
            Optional<InternalFailureException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostContentError AsLimitExceededException(LimitExceededException value) =>
        new(
            default,
            default,
            default,
            Optional<LimitExceededException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostContentError AsLoopDetectedException(LoopDetectedException value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<LoopDetectedException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostContentError AsNotAcceptableException(NotAcceptableException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<NotAcceptableException>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static PostContentError AsNotFoundException(NotFoundException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<NotFoundException>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static PostContentError AsRequestTimeoutException(RequestTimeoutException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RequestTimeoutException>.Some(value),
            default,
            default,
            default,
            default);

    private static PostContentError AsRuntimeLexBadGatewayException(RuntimeLexBadGatewayException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RuntimeLexBadGatewayException>.Some(value),
            default,
            default,
            default);

    private static PostContentError AsRuntimeLexDependencyFailedException(RuntimeLexDependencyFailedException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RuntimeLexDependencyFailedException>.Some(value),
            default,
            default);

    private static PostContentError AsUnsupportedMediaTypeException(UnsupportedMediaTypeException value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnsupportedMediaTypeException>.Some(value),
            default);

    private static PostContentError AsFallback(RawError value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetConflictException([NotNullWhen(true)] out ConflictException? value) =>
        _conflictExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetLoopDetectedException([NotNullWhen(true)] out LoopDetectedException? value) =>
        _loopDetectedExceptionValue.TryGetValue(out value);

    public bool TryGetNotAcceptableException([NotNullWhen(true)] out NotAcceptableException? value) =>
        _notAcceptableExceptionValue.TryGetValue(out value);

    public bool TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value) =>
        _notFoundExceptionValue.TryGetValue(out value);

    public bool TryGetRequestTimeoutException([NotNullWhen(true)] out RequestTimeoutException? value) =>
        _requestTimeoutExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeLexBadGatewayException([NotNullWhen(true)] out RuntimeLexBadGatewayException? value) =>
        _runtimeLexBadGatewayExceptionValue.TryGetValue(out value);

    public bool TryGetRuntimeLexDependencyFailedException([NotNullWhen(true)] out RuntimeLexDependencyFailedException? value) =>
        _runtimeLexDependencyFailedExceptionValue.TryGetValue(out value);

    public bool TryGetUnsupportedMediaTypeException([NotNullWhen(true)] out UnsupportedMediaTypeException? value) =>
        _unsupportedMediaTypeExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<ConflictException, TResult> onConflictException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<LoopDetectedException, TResult> onLoopDetectedException,
        Func<NotAcceptableException, TResult> onNotAcceptableException,
        Func<NotFoundException, TResult> onNotFoundException,
        Func<RequestTimeoutException, TResult> onRequestTimeoutException,
        Func<RuntimeLexBadGatewayException, TResult> onRuntimeLexBadGatewayException,
        Func<RuntimeLexDependencyFailedException, TResult> onRuntimeLexDependencyFailedException,
        Func<UnsupportedMediaTypeException, TResult> onUnsupportedMediaTypeException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestException(out var badRequestExceptionValue) => onBadRequestException(
                badRequestExceptionValue),
            _ when TryGetConflictException(out var conflictExceptionValue) => onConflictException(
                conflictExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetLimitExceededException(out var limitExceededExceptionValue) => onLimitExceededException(
                limitExceededExceptionValue),
            _ when TryGetLoopDetectedException(out var loopDetectedExceptionValue) => onLoopDetectedException(
                loopDetectedExceptionValue),
            _ when TryGetNotAcceptableException(out var notAcceptableExceptionValue) => onNotAcceptableException(
                notAcceptableExceptionValue),
            _ when TryGetNotFoundException(out var notFoundExceptionValue) => onNotFoundException(
                notFoundExceptionValue),
            _ when TryGetRequestTimeoutException(out var requestTimeoutExceptionValue) => onRequestTimeoutException(
                requestTimeoutExceptionValue),
            _ when TryGetRuntimeLexBadGatewayException(
                out var runtimeLexBadGatewayExceptionValue) => onRuntimeLexBadGatewayException(
                runtimeLexBadGatewayExceptionValue),
            _ when TryGetRuntimeLexDependencyFailedException(
                out var runtimeLexDependencyFailedExceptionValue) => onRuntimeLexDependencyFailedException(
                runtimeLexDependencyFailedExceptionValue),
            _ when TryGetUnsupportedMediaTypeException(
                out var unsupportedMediaTypeExceptionValue) => onUnsupportedMediaTypeException(
                unsupportedMediaTypeExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostContentError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<ConflictException> onConflictException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<LoopDetectedException> onLoopDetectedException,
        Action<NotAcceptableException> onNotAcceptableException,
        Action<NotFoundException> onNotFoundException,
        Action<RequestTimeoutException> onRequestTimeoutException,
        Action<RuntimeLexBadGatewayException> onRuntimeLexBadGatewayException,
        Action<RuntimeLexDependencyFailedException> onRuntimeLexDependencyFailedException,
        Action<UnsupportedMediaTypeException> onUnsupportedMediaTypeException,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetConflictException(out var conflictExceptionValue)) onConflictException(conflictExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetLoopDetectedException(out var loopDetectedExceptionValue)) onLoopDetectedException(
            loopDetectedExceptionValue);
        else if (TryGetNotAcceptableException(out var notAcceptableExceptionValue)) onNotAcceptableException(
            notAcceptableExceptionValue);
        else if (TryGetNotFoundException(out var notFoundExceptionValue)) onNotFoundException(notFoundExceptionValue);
        else if (TryGetRequestTimeoutException(out var requestTimeoutExceptionValue)) onRequestTimeoutException(
            requestTimeoutExceptionValue);
        else if (TryGetRuntimeLexBadGatewayException(
            out var runtimeLexBadGatewayExceptionValue)) onRuntimeLexBadGatewayException(
            runtimeLexBadGatewayExceptionValue);
        else if (TryGetRuntimeLexDependencyFailedException(
            out var runtimeLexDependencyFailedExceptionValue)) onRuntimeLexDependencyFailedException(
            runtimeLexDependencyFailedExceptionValue);
        else if (TryGetUnsupportedMediaTypeException(
            out var unsupportedMediaTypeExceptionValue)) onUnsupportedMediaTypeException(
            unsupportedMediaTypeExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostContentError)} holds no value.");
    }

    private static Task<PostContentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            404 => response.Json<NotFoundException>().As(AsNotFoundException),
            406 => response.Json<NotAcceptableException>().As(AsNotAcceptableException),
            408 => response.Json<RequestTimeoutException>().As(AsRequestTimeoutException),
            409 => response.Json<ConflictException>().As(AsConflictException),
            415 => response.Json<UnsupportedMediaTypeException>().As(AsUnsupportedMediaTypeException),
            424 => response.Json<RuntimeLexDependencyFailedException>().As(AsRuntimeLexDependencyFailedException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            502 => response.Json<RuntimeLexBadGatewayException>().As(AsRuntimeLexBadGatewayException),
            508 => response.Json<LoopDetectedException>().As(AsLoopDetectedException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostContentError> Response { get; } = new(Create);
}
