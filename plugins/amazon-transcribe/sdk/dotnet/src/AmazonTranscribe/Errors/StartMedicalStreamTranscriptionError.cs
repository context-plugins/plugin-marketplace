using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonTranscribe.Core.ErrorResponse;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models;

namespace AmazonTranscribe.Errors;

public sealed class StartMedicalStreamTranscriptionError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<ConflictException> _conflictExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private readonly Optional<ServiceUnavailableException> _serviceUnavailableExceptionValue;

    private StartMedicalStreamTranscriptionError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<ConflictException> conflictExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<ServiceUnavailableException> serviceUnavailableExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _conflictExceptionValue = conflictExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
        _serviceUnavailableExceptionValue = serviceUnavailableExceptionValue;
    }

    private static StartMedicalStreamTranscriptionError AsBadRequestException(BadRequestException value) =>
        new(Optional<BadRequestException>.Some(value), default, default, default, default, default);

    private static StartMedicalStreamTranscriptionError AsConflictException(ConflictException value) =>
        new(default, Optional<ConflictException>.Some(value), default, default, default, default);

    private static StartMedicalStreamTranscriptionError AsInternalFailureException(InternalFailureException value) =>
        new(default, default, Optional<InternalFailureException>.Some(value), default, default, default);

    private static StartMedicalStreamTranscriptionError AsLimitExceededException(LimitExceededException value) =>
        new(default, default, default, Optional<LimitExceededException>.Some(value), default, default);

    private static StartMedicalStreamTranscriptionError AsServiceUnavailableException(ServiceUnavailableException value) =>
        new(default, default, default, default, Optional<ServiceUnavailableException>.Some(value), default);

    private static StartMedicalStreamTranscriptionError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetConflictException([NotNullWhen(true)] out ConflictException? value) =>
        _conflictExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetServiceUnavailableException([NotNullWhen(true)] out ServiceUnavailableException? value) =>
        _serviceUnavailableExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<ConflictException, TResult> onConflictException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<ServiceUnavailableException, TResult> onServiceUnavailableException,
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
            _ when TryGetServiceUnavailableException(
                out var serviceUnavailableExceptionValue) => onServiceUnavailableException(
                serviceUnavailableExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(StartMedicalStreamTranscriptionError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<ConflictException> onConflictException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<ServiceUnavailableException> onServiceUnavailableException,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetConflictException(out var conflictExceptionValue)) onConflictException(conflictExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetServiceUnavailableException(
            out var serviceUnavailableExceptionValue)) onServiceUnavailableException(serviceUnavailableExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(StartMedicalStreamTranscriptionError)} holds no value.");
    }

    private static Task<StartMedicalStreamTranscriptionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            409 => response.Json<ConflictException>().As(AsConflictException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            503 => response.Json<ServiceUnavailableException>().As(AsServiceUnavailableException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<StartMedicalStreamTranscriptionError> Response { get; } = new(Create);
}
