using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class CreateUploadUrlError : ApiError
{
    private readonly Optional<ConflictException> _conflictExceptionValue;

    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<ResourceNotFoundException> _resourceNotFoundExceptionValue;

    private readonly Optional<ThrottlingException> _throttlingExceptionValue;

    private readonly Optional<ValidationExceptionModel> _validationExceptionModelValue;

    private CreateUploadUrlError(Optional<ConflictException> conflictExceptionValue,
        Optional<InternalServerException> internalServerExceptionValue,
        Optional<ResourceNotFoundException> resourceNotFoundExceptionValue,
        Optional<ThrottlingException> throttlingExceptionValue,
        Optional<ValidationExceptionModel> validationExceptionModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _conflictExceptionValue = conflictExceptionValue;
        _internalServerExceptionValue = internalServerExceptionValue;
        _resourceNotFoundExceptionValue = resourceNotFoundExceptionValue;
        _throttlingExceptionValue = throttlingExceptionValue;
        _validationExceptionModelValue = validationExceptionModelValue;
    }

    private static CreateUploadUrlError AsConflictException(ConflictException value) =>
        new(Optional<ConflictException>.Some(value), default, default, default, default, default);

    private static CreateUploadUrlError AsInternalServerException(InternalServerException value) =>
        new(default, Optional<InternalServerException>.Some(value), default, default, default, default);

    private static CreateUploadUrlError AsResourceNotFoundException(ResourceNotFoundException value) =>
        new(default, default, Optional<ResourceNotFoundException>.Some(value), default, default, default);

    private static CreateUploadUrlError AsThrottlingException(ThrottlingException value) =>
        new(default, default, default, Optional<ThrottlingException>.Some(value), default, default);

    private static CreateUploadUrlError AsValidationExceptionModel(ValidationExceptionModel value) =>
        new(default, default, default, default, Optional<ValidationExceptionModel>.Some(value), default);

    private static CreateUploadUrlError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetConflictException([NotNullWhen(true)] out ConflictException? value) =>
        _conflictExceptionValue.TryGetValue(out value);

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value) =>
        _resourceNotFoundExceptionValue.TryGetValue(out value);

    public bool TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value) =>
        _throttlingExceptionValue.TryGetValue(out value);

    public bool TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value) =>
        _validationExceptionModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ConflictException, TResult> onConflictException,
        Func<InternalServerException, TResult> onInternalServerException,
        Func<ResourceNotFoundException, TResult> onResourceNotFoundException,
        Func<ThrottlingException, TResult> onThrottlingException,
        Func<ValidationExceptionModel, TResult> onValidationExceptionModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetConflictException(out var conflictExceptionValue) => onConflictException(
                conflictExceptionValue),
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetResourceNotFoundException(
                out var resourceNotFoundExceptionValue) => onResourceNotFoundException(resourceNotFoundExceptionValue),
            _ when TryGetThrottlingException(out var throttlingExceptionValue) => onThrottlingException(
                throttlingExceptionValue),
            _ when TryGetValidationExceptionModel(out var validationExceptionModelValue) => onValidationExceptionModel(
                validationExceptionModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateUploadUrlError)} holds no value.")
        };

    public void Match(Action<ConflictException> onConflictException,
        Action<InternalServerException> onInternalServerException,
        Action<ResourceNotFoundException> onResourceNotFoundException,
        Action<ThrottlingException> onThrottlingException,
        Action<ValidationExceptionModel> onValidationExceptionModel,
        Action<RawError> otherwise)
    {
        if (TryGetConflictException(out var conflictExceptionValue)) onConflictException(conflictExceptionValue);
        else if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetResourceNotFoundException(out var resourceNotFoundExceptionValue)) onResourceNotFoundException(
            resourceNotFoundExceptionValue);
        else if (TryGetThrottlingException(out var throttlingExceptionValue)) onThrottlingException(
            throttlingExceptionValue);
        else if (TryGetValidationExceptionModel(out var validationExceptionModelValue)) onValidationExceptionModel(
            validationExceptionModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateUploadUrlError)} holds no value.");
    }

    private static Task<CreateUploadUrlError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationExceptionModel>().As(AsValidationExceptionModel),
            404 => response.Json<ResourceNotFoundException>().As(AsResourceNotFoundException),
            409 => response.Json<ConflictException>().As(AsConflictException),
            429 => response.Json<ThrottlingException>().As(AsThrottlingException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateUploadUrlError> Response { get; } = new(Create);
}
