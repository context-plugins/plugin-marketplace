using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonAppSync.Core.ErrorResponse;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models;

namespace AmazonAppSync.Errors;

public sealed class UpdateApiKeyError : ApiError
{
    private readonly Optional<ApiKeyValidityOutOfBoundsException> _apiKeyValidityOutOfBoundsExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private readonly Optional<NotFoundException> _notFoundExceptionValue;

    private readonly Optional<UnauthorizedException> _unauthorizedExceptionValue;

    private UpdateApiKeyError(Optional<ApiKeyValidityOutOfBoundsException> apiKeyValidityOutOfBoundsExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<NotFoundException> notFoundExceptionValue,
        Optional<UnauthorizedException> unauthorizedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiKeyValidityOutOfBoundsExceptionValue = apiKeyValidityOutOfBoundsExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
        _notFoundExceptionValue = notFoundExceptionValue;
        _unauthorizedExceptionValue = unauthorizedExceptionValue;
    }

    private static UpdateApiKeyError AsApiKeyValidityOutOfBoundsException(ApiKeyValidityOutOfBoundsException value) =>
        new(Optional<ApiKeyValidityOutOfBoundsException>.Some(value), default, default, default, default, default);

    private static UpdateApiKeyError AsInternalFailureException(InternalFailureException value) =>
        new(default, Optional<InternalFailureException>.Some(value), default, default, default, default);

    private static UpdateApiKeyError AsLimitExceededException(LimitExceededException value) =>
        new(default, default, Optional<LimitExceededException>.Some(value), default, default, default);

    private static UpdateApiKeyError AsNotFoundException(NotFoundException value) =>
        new(default, default, default, Optional<NotFoundException>.Some(value), default, default);

    private static UpdateApiKeyError AsUnauthorizedException(UnauthorizedException value) =>
        new(default, default, default, default, Optional<UnauthorizedException>.Some(value), default);

    private static UpdateApiKeyError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiKeyValidityOutOfBoundsException([NotNullWhen(true)] out ApiKeyValidityOutOfBoundsException? value) =>
        _apiKeyValidityOutOfBoundsExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value) =>
        _notFoundExceptionValue.TryGetValue(out value);

    public bool TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value) =>
        _unauthorizedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiKeyValidityOutOfBoundsException, TResult> onApiKeyValidityOutOfBoundsException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<NotFoundException, TResult> onNotFoundException,
        Func<UnauthorizedException, TResult> onUnauthorizedException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiKeyValidityOutOfBoundsException(
                out var apiKeyValidityOutOfBoundsExceptionValue) => onApiKeyValidityOutOfBoundsException(
                apiKeyValidityOutOfBoundsExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetLimitExceededException(out var limitExceededExceptionValue) => onLimitExceededException(
                limitExceededExceptionValue),
            _ when TryGetNotFoundException(out var notFoundExceptionValue) => onNotFoundException(
                notFoundExceptionValue),
            _ when TryGetUnauthorizedException(out var unauthorizedExceptionValue) => onUnauthorizedException(
                unauthorizedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateApiKeyError)} holds no value.")
        };

    public void Match(Action<ApiKeyValidityOutOfBoundsException> onApiKeyValidityOutOfBoundsException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<NotFoundException> onNotFoundException,
        Action<UnauthorizedException> onUnauthorizedException,
        Action<RawError> otherwise)
    {
        if (TryGetApiKeyValidityOutOfBoundsException(
            out var apiKeyValidityOutOfBoundsExceptionValue)) onApiKeyValidityOutOfBoundsException(
            apiKeyValidityOutOfBoundsExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetNotFoundException(out var notFoundExceptionValue)) onNotFoundException(notFoundExceptionValue);
        else if (TryGetUnauthorizedException(out var unauthorizedExceptionValue)) onUnauthorizedException(
            unauthorizedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateApiKeyError)} holds no value.");
    }

    private static Task<UpdateApiKeyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiKeyValidityOutOfBoundsException>().As(AsApiKeyValidityOutOfBoundsException),
            401 => response.Json<UnauthorizedException>().As(AsUnauthorizedException),
            404 => response.Json<NotFoundException>().As(AsNotFoundException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateApiKeyError> Response { get; } = new(Create);
}
