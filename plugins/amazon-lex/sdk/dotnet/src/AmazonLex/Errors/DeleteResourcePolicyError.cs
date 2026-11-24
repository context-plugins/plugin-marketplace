using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class DeleteResourcePolicyError : ApiError
{
    private readonly Optional<InternalServerException> _internalServerExceptionValue;

    private readonly Optional<PreconditionFailedException> _preconditionFailedExceptionValue;

    private readonly Optional<ResourceNotFoundException> _resourceNotFoundExceptionValue;

    private readonly Optional<ThrottlingException> _throttlingExceptionValue;

    private DeleteResourcePolicyError(Optional<InternalServerException> internalServerExceptionValue,
        Optional<PreconditionFailedException> preconditionFailedExceptionValue,
        Optional<ResourceNotFoundException> resourceNotFoundExceptionValue,
        Optional<ThrottlingException> throttlingExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _internalServerExceptionValue = internalServerExceptionValue;
        _preconditionFailedExceptionValue = preconditionFailedExceptionValue;
        _resourceNotFoundExceptionValue = resourceNotFoundExceptionValue;
        _throttlingExceptionValue = throttlingExceptionValue;
    }

    private static DeleteResourcePolicyError AsInternalServerException(InternalServerException value) =>
        new(Optional<InternalServerException>.Some(value), default, default, default, default);

    private static DeleteResourcePolicyError AsPreconditionFailedException(PreconditionFailedException value) =>
        new(default, Optional<PreconditionFailedException>.Some(value), default, default, default);

    private static DeleteResourcePolicyError AsResourceNotFoundException(ResourceNotFoundException value) =>
        new(default, default, Optional<ResourceNotFoundException>.Some(value), default, default);

    private static DeleteResourcePolicyError AsThrottlingException(ThrottlingException value) =>
        new(default, default, default, Optional<ThrottlingException>.Some(value), default);

    private static DeleteResourcePolicyError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value) =>
        _internalServerExceptionValue.TryGetValue(out value);

    public bool TryGetPreconditionFailedException([NotNullWhen(true)] out PreconditionFailedException? value) =>
        _preconditionFailedExceptionValue.TryGetValue(out value);

    public bool TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value) =>
        _resourceNotFoundExceptionValue.TryGetValue(out value);

    public bool TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value) =>
        _throttlingExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InternalServerException, TResult> onInternalServerException,
        Func<PreconditionFailedException, TResult> onPreconditionFailedException,
        Func<ResourceNotFoundException, TResult> onResourceNotFoundException,
        Func<ThrottlingException, TResult> onThrottlingException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInternalServerException(out var internalServerExceptionValue) => onInternalServerException(
                internalServerExceptionValue),
            _ when TryGetPreconditionFailedException(
                out var preconditionFailedExceptionValue) => onPreconditionFailedException(
                preconditionFailedExceptionValue),
            _ when TryGetResourceNotFoundException(
                out var resourceNotFoundExceptionValue) => onResourceNotFoundException(resourceNotFoundExceptionValue),
            _ when TryGetThrottlingException(out var throttlingExceptionValue) => onThrottlingException(
                throttlingExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteResourcePolicyError)} holds no value.")
        };

    public void Match(Action<InternalServerException> onInternalServerException,
        Action<PreconditionFailedException> onPreconditionFailedException,
        Action<ResourceNotFoundException> onResourceNotFoundException,
        Action<ThrottlingException> onThrottlingException,
        Action<RawError> otherwise)
    {
        if (TryGetInternalServerException(out var internalServerExceptionValue)) onInternalServerException(
            internalServerExceptionValue);
        else if (TryGetPreconditionFailedException(
            out var preconditionFailedExceptionValue)) onPreconditionFailedException(preconditionFailedExceptionValue);
        else if (TryGetResourceNotFoundException(out var resourceNotFoundExceptionValue)) onResourceNotFoundException(
            resourceNotFoundExceptionValue);
        else if (TryGetThrottlingException(out var throttlingExceptionValue)) onThrottlingException(
            throttlingExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteResourcePolicyError)} holds no value.");
    }

    private static Task<DeleteResourcePolicyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<ResourceNotFoundException>().As(AsResourceNotFoundException),
            412 => response.Json<PreconditionFailedException>().As(AsPreconditionFailedException),
            429 => response.Json<ThrottlingException>().As(AsThrottlingException),
            500 => response.Json<InternalServerException>().As(AsInternalServerException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteResourcePolicyError> Response { get; } = new(Create);
}
