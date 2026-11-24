using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonLex.Core.ErrorResponse;
using AmazonLex.Core.Models;
using AmazonLex.Models;

namespace AmazonLex.Errors;

public sealed class StartMigrationError : ApiError
{
    private readonly Optional<BadRequestException> _badRequestExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<LimitExceededException> _limitExceededExceptionValue;

    private readonly Optional<ModelsLexAccessDeniedException> _modelsLexAccessDeniedExceptionValue;

    private readonly Optional<NotFoundException> _notFoundExceptionValue;

    private StartMigrationError(Optional<BadRequestException> badRequestExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<LimitExceededException> limitExceededExceptionValue,
        Optional<ModelsLexAccessDeniedException> modelsLexAccessDeniedExceptionValue,
        Optional<NotFoundException> notFoundExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestExceptionValue = badRequestExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _limitExceededExceptionValue = limitExceededExceptionValue;
        _modelsLexAccessDeniedExceptionValue = modelsLexAccessDeniedExceptionValue;
        _notFoundExceptionValue = notFoundExceptionValue;
    }

    private static StartMigrationError AsBadRequestException(BadRequestException value) =>
        new(Optional<BadRequestException>.Some(value), default, default, default, default, default);

    private static StartMigrationError AsInternalFailureException(InternalFailureException value) =>
        new(default, Optional<InternalFailureException>.Some(value), default, default, default, default);

    private static StartMigrationError AsLimitExceededException(LimitExceededException value) =>
        new(default, default, Optional<LimitExceededException>.Some(value), default, default, default);

    private static StartMigrationError AsModelsLexAccessDeniedException(ModelsLexAccessDeniedException value) =>
        new(default, default, default, Optional<ModelsLexAccessDeniedException>.Some(value), default, default);

    private static StartMigrationError AsNotFoundException(NotFoundException value) =>
        new(default, default, default, default, Optional<NotFoundException>.Some(value), default);

    private static StartMigrationError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value) =>
        _badRequestExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value) =>
        _limitExceededExceptionValue.TryGetValue(out value);

    public bool TryGetModelsLexAccessDeniedException([NotNullWhen(true)] out ModelsLexAccessDeniedException? value) =>
        _modelsLexAccessDeniedExceptionValue.TryGetValue(out value);

    public bool TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value) =>
        _notFoundExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestException, TResult> onBadRequestException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<LimitExceededException, TResult> onLimitExceededException,
        Func<ModelsLexAccessDeniedException, TResult> onModelsLexAccessDeniedException,
        Func<NotFoundException, TResult> onNotFoundException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestException(out var badRequestExceptionValue) => onBadRequestException(
                badRequestExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetLimitExceededException(out var limitExceededExceptionValue) => onLimitExceededException(
                limitExceededExceptionValue),
            _ when TryGetModelsLexAccessDeniedException(
                out var modelsLexAccessDeniedExceptionValue) => onModelsLexAccessDeniedException(
                modelsLexAccessDeniedExceptionValue),
            _ when TryGetNotFoundException(out var notFoundExceptionValue) => onNotFoundException(
                notFoundExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(StartMigrationError)} holds no value.")
        };

    public void Match(Action<BadRequestException> onBadRequestException,
        Action<InternalFailureException> onInternalFailureException,
        Action<LimitExceededException> onLimitExceededException,
        Action<ModelsLexAccessDeniedException> onModelsLexAccessDeniedException,
        Action<NotFoundException> onNotFoundException,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestException(out var badRequestExceptionValue)) onBadRequestException(
            badRequestExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetLimitExceededException(out var limitExceededExceptionValue)) onLimitExceededException(
            limitExceededExceptionValue);
        else if (TryGetModelsLexAccessDeniedException(
            out var modelsLexAccessDeniedExceptionValue)) onModelsLexAccessDeniedException(
            modelsLexAccessDeniedExceptionValue);
        else if (TryGetNotFoundException(out var notFoundExceptionValue)) onNotFoundException(notFoundExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(StartMigrationError)} holds no value.");
    }

    private static Task<StartMigrationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestException>().As(AsBadRequestException),
            403 => response.Json<ModelsLexAccessDeniedException>().As(AsModelsLexAccessDeniedException),
            404 => response.Json<NotFoundException>().As(AsNotFoundException),
            429 => response.Json<LimitExceededException>().As(AsLimitExceededException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<StartMigrationError> Response { get; } = new(Create);
}
