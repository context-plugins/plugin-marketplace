using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetPayeesError : ApiError
{
    private readonly Optional<BadRequestErrorSchema> _badRequestErrorSchemaValue;

    private readonly Optional<ForbiddenAccessError1> _forbiddenAccessError1Value;

    private readonly Optional<NotFoundErrorSchema> _notFoundErrorSchemaValue;

    private readonly Optional<UnauthorizedErrorSchema> _unauthorizedErrorSchemaValue;

    private GetPayeesError(Optional<BadRequestErrorSchema> badRequestErrorSchemaValue,
        Optional<ForbiddenAccessError1> forbiddenAccessError1Value,
        Optional<NotFoundErrorSchema> notFoundErrorSchemaValue,
        Optional<UnauthorizedErrorSchema> unauthorizedErrorSchemaValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestErrorSchemaValue = badRequestErrorSchemaValue;
        _forbiddenAccessError1Value = forbiddenAccessError1Value;
        _notFoundErrorSchemaValue = notFoundErrorSchemaValue;
        _unauthorizedErrorSchemaValue = unauthorizedErrorSchemaValue;
    }

    private static GetPayeesError AsBadRequestErrorSchema(BadRequestErrorSchema value) =>
        new(Optional<BadRequestErrorSchema>.Some(value), default, default, default, default);

    private static GetPayeesError AsForbiddenAccessError1(ForbiddenAccessError1 value) =>
        new(default, Optional<ForbiddenAccessError1>.Some(value), default, default, default);

    private static GetPayeesError AsNotFoundErrorSchema(NotFoundErrorSchema value) =>
        new(default, default, Optional<NotFoundErrorSchema>.Some(value), default, default);

    private static GetPayeesError AsUnauthorizedErrorSchema(UnauthorizedErrorSchema value) =>
        new(default, default, default, Optional<UnauthorizedErrorSchema>.Some(value), default);

    private static GetPayeesError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestErrorSchema([NotNullWhen(true)] out BadRequestErrorSchema? value) =>
        _badRequestErrorSchemaValue.TryGetValue(out value);

    public bool TryGetForbiddenAccessError1([NotNullWhen(true)] out ForbiddenAccessError1? value) =>
        _forbiddenAccessError1Value.TryGetValue(out value);

    public bool TryGetNotFoundErrorSchema([NotNullWhen(true)] out NotFoundErrorSchema? value) =>
        _notFoundErrorSchemaValue.TryGetValue(out value);

    public bool TryGetUnauthorizedErrorSchema([NotNullWhen(true)] out UnauthorizedErrorSchema? value) =>
        _unauthorizedErrorSchemaValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestErrorSchema, TResult> onBadRequestErrorSchema,
        Func<ForbiddenAccessError1, TResult> onForbiddenAccessError1,
        Func<NotFoundErrorSchema, TResult> onNotFoundErrorSchema,
        Func<UnauthorizedErrorSchema, TResult> onUnauthorizedErrorSchema,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestErrorSchema(out var badRequestErrorSchemaValue) => onBadRequestErrorSchema(
                badRequestErrorSchemaValue),
            _ when TryGetForbiddenAccessError1(out var forbiddenAccessError1Value) => onForbiddenAccessError1(
                forbiddenAccessError1Value),
            _ when TryGetNotFoundErrorSchema(out var notFoundErrorSchemaValue) => onNotFoundErrorSchema(
                notFoundErrorSchemaValue),
            _ when TryGetUnauthorizedErrorSchema(out var unauthorizedErrorSchemaValue) => onUnauthorizedErrorSchema(
                unauthorizedErrorSchemaValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetPayeesError)} holds no value.")
        };

    public void Match(Action<BadRequestErrorSchema> onBadRequestErrorSchema,
        Action<ForbiddenAccessError1> onForbiddenAccessError1,
        Action<NotFoundErrorSchema> onNotFoundErrorSchema,
        Action<UnauthorizedErrorSchema> onUnauthorizedErrorSchema,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestErrorSchema(out var badRequestErrorSchemaValue)) onBadRequestErrorSchema(
            badRequestErrorSchemaValue);
        else if (TryGetForbiddenAccessError1(out var forbiddenAccessError1Value)) onForbiddenAccessError1(
            forbiddenAccessError1Value);
        else if (TryGetNotFoundErrorSchema(out var notFoundErrorSchemaValue)) onNotFoundErrorSchema(
            notFoundErrorSchemaValue);
        else if (TryGetUnauthorizedErrorSchema(out var unauthorizedErrorSchemaValue)) onUnauthorizedErrorSchema(
            unauthorizedErrorSchemaValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetPayeesError)} holds no value.");
    }

    private static Task<GetPayeesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestErrorSchema>().As(AsBadRequestErrorSchema),
            401 => response.Json<UnauthorizedErrorSchema>().As(AsUnauthorizedErrorSchema),
            403 => response.Json<ForbiddenAccessError1>().As(AsForbiddenAccessError1),
            500 => response.Json<NotFoundErrorSchema>().As(AsNotFoundErrorSchema),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPayeesError> Response { get; } = new(Create);
}
