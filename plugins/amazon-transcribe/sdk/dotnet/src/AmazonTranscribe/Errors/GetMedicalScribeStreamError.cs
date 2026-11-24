using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonTranscribe.Core.ErrorResponse;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models;

namespace AmazonTranscribe.Errors;

public sealed class GetMedicalScribeStreamError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private readonly Optional<ResourceNotFoundException> _resourceNotFoundExceptionValue;

    private GetMedicalScribeStreamError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<ResourceNotFoundException> resourceNotFoundExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
        _resourceNotFoundExceptionValue = resourceNotFoundExceptionValue;
    }

    private static GetMedicalScribeStreamError AsBadRequestException(BadRequestException value) =>
        new(Optional<BadRequestException>.Some(value), default, default, default, default);

    private static GetMedicalScribeStreamError AsInternalFailureException(InternalFailureException value) =>
        new(default, Optional<InternalFailureException>.Some(value), default, default, default);

    private static GetMedicalScribeStreamError AsLimitExceededException(LimitExceededException value) =>
        new(default, default, Optional<LimitExceededException>.Some(value), default, default);

    private static GetMedicalScribeStreamError AsResourceNotFoundException(ResourceNotFoundException value) =>
        new(default, default, default, Optional<ResourceNotFoundException>.Some(value), default);

    private static GetMedicalScribeStreamError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value) =>
        _resourceNotFoundExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<ResourceNotFoundException, TResult> onResourceNotFoundException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestException(out var badRequestExceptionValue) => onBadRequestException(
                badRequestExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetLimitExceededException(out var limitExceededExceptionValue) => onLimitExceededException(
                limitExceededExceptionValue),
            _ when TryGetResourceNotFoundException(
                out var resourceNotFoundExceptionValue) => onResourceNotFoundException(resourceNotFoundExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetMedicalScribeStreamError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<ResourceNotFoundException> onResourceNotFoundException,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetResourceNotFoundException(out var resourceNotFoundExceptionValue)) onResourceNotFoundException(
            resourceNotFoundExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetMedicalScribeStreamError)} holds no value.");
    }

    private static Task<GetMedicalScribeStreamError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            404 => response.Json<ResourceNotFoundException>().As(AsResourceNotFoundException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetMedicalScribeStreamError> Response { get; } = new(Create);
}
