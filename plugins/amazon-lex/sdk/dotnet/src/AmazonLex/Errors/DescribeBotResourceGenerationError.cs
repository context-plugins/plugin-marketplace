using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class DescribeBotResourceGenerationError : ApiError
{
    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<ResourceNotFoundException> _resourceNotFoundExceptionValue;

    private readonly Optional<ThrottlingException> _throttlingExceptionValue;

    private readonly Optional<ValidationExceptionModel> _validationExceptionModelValue;

    private DescribeBotResourceGenerationError(Optional<InternalServerException> internalServerExceptionValue,
        Optional<ResourceNotFoundException> resourceNotFoundExceptionValue,
        Optional<ThrottlingException> throttlingExceptionValue,
        Optional<ValidationExceptionModel> validationExceptionModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _internalServerExceptionValue = internalServerExceptionValue;
        _resourceNotFoundExceptionValue = resourceNotFoundExceptionValue;
        _throttlingExceptionValue = throttlingExceptionValue;
        _validationExceptionModelValue = validationExceptionModelValue;
    }

    private static DescribeBotResourceGenerationError AsInternalServerException(InternalServerException value) =>
        new(Optional<InternalServerException>.Some(value), default, default, default, default);

    private static DescribeBotResourceGenerationError AsResourceNotFoundException(ResourceNotFoundException value) =>
        new(default, Optional<ResourceNotFoundException>.Some(value), default, default, default);

    private static DescribeBotResourceGenerationError AsThrottlingException(ThrottlingException value) =>
        new(default, default, Optional<ThrottlingException>.Some(value), default, default);

    private static DescribeBotResourceGenerationError AsValidationExceptionModel(ValidationExceptionModel value) =>
        new(default, default, default, Optional<ValidationExceptionModel>.Some(value), default);

    private static DescribeBotResourceGenerationError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value) =>
        _resourceNotFoundExceptionValue.TryGetValue(out value);

    public bool TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value) =>
        _throttlingExceptionValue.TryGetValue(out value);

    public bool TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value) =>
        _validationExceptionModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InternalServerException, TResult> onInternalServerException,
        Func<ResourceNotFoundException, TResult> onResourceNotFoundException,
        Func<ThrottlingException, TResult> onThrottlingException,
        Func<ValidationExceptionModel, TResult> onValidationExceptionModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetResourceNotFoundException(
                out var resourceNotFoundExceptionValue) => onResourceNotFoundException(resourceNotFoundExceptionValue),
            _ when TryGetThrottlingException(out var throttlingExceptionValue) => onThrottlingException(
                throttlingExceptionValue),
            _ when TryGetValidationExceptionModel(out var validationExceptionModelValue) => onValidationExceptionModel(
                validationExceptionModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DescribeBotResourceGenerationError)} holds no value.")
        };

    public void Match(Action<InternalServerException> onInternalServerException,
        Action<ResourceNotFoundException> onResourceNotFoundException,
        Action<ThrottlingException> onThrottlingException,
        Action<ValidationExceptionModel> onValidationExceptionModel,
        Action<RawError> otherwise)
    {
        if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetResourceNotFoundException(out var resourceNotFoundExceptionValue)) onResourceNotFoundException(
            resourceNotFoundExceptionValue);
        else if (TryGetThrottlingException(out var throttlingExceptionValue)) onThrottlingException(
            throttlingExceptionValue);
        else if (TryGetValidationExceptionModel(out var validationExceptionModelValue)) onValidationExceptionModel(
            validationExceptionModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DescribeBotResourceGenerationError)} holds no value.");
    }

    private static Task<DescribeBotResourceGenerationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ValidationExceptionModel>().As(AsValidationExceptionModel),
            404 => response.Json<ResourceNotFoundException>().As(AsResourceNotFoundException),
            429 => response.Json<ThrottlingException>().As(AsThrottlingException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DescribeBotResourceGenerationError> Response { get; } = new(Create);
}
