using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonAppSync.Core.ErrorResponse;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models;

namespace AmazonAppSync.Errors;

public sealed class GetIntrospectionSchemaError : ApiError
{
    private readonly Optional<GraphQlSchemaException> _graphQlSchemaExceptionValue;

    private readonly Optional<InternalFailureException> _internalFailureExceptionValue;

    private readonly Optional<NotFoundException> _notFoundExceptionValue;

    private readonly Optional<UnauthorizedException> _unauthorizedExceptionValue;

    private GetIntrospectionSchemaError(Optional<GraphQlSchemaException> graphQlSchemaExceptionValue,
        Optional<InternalFailureException> internalFailureExceptionValue,
        Optional<NotFoundException> notFoundExceptionValue,
        Optional<UnauthorizedException> unauthorizedExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _graphQlSchemaExceptionValue = graphQlSchemaExceptionValue;
        _internalFailureExceptionValue = internalFailureExceptionValue;
        _notFoundExceptionValue = notFoundExceptionValue;
        _unauthorizedExceptionValue = unauthorizedExceptionValue;
    }

    private static GetIntrospectionSchemaError AsGraphQlSchemaException(GraphQlSchemaException value) =>
        new(Optional<GraphQlSchemaException>.Some(value), default, default, default, default);

    private static GetIntrospectionSchemaError AsInternalFailureException(InternalFailureException value) =>
        new(default, Optional<InternalFailureException>.Some(value), default, default, default);

    private static GetIntrospectionSchemaError AsNotFoundException(NotFoundException value) =>
        new(default, default, Optional<NotFoundException>.Some(value), default, default);

    private static GetIntrospectionSchemaError AsUnauthorizedException(UnauthorizedException value) =>
        new(default, default, default, Optional<UnauthorizedException>.Some(value), default);

    private static GetIntrospectionSchemaError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetGraphQlSchemaException([NotNullWhen(true)] out GraphQlSchemaException? value) =>
        _graphQlSchemaExceptionValue.TryGetValue(out value);

    public bool TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value) =>
        _internalFailureExceptionValue.TryGetValue(out value);

    public bool TryGetNotFoundException([NotNullWhen(true)] out NotFoundException? value) =>
        _notFoundExceptionValue.TryGetValue(out value);

    public bool TryGetUnauthorizedException([NotNullWhen(true)] out UnauthorizedException? value) =>
        _unauthorizedExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GraphQlSchemaException, TResult> onGraphQlSchemaException,
        Func<InternalFailureException, TResult> onInternalFailureException,
        Func<NotFoundException, TResult> onNotFoundException,
        Func<UnauthorizedException, TResult> onUnauthorizedException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGraphQlSchemaException(out var graphQlSchemaExceptionValue) => onGraphQlSchemaException(
                graphQlSchemaExceptionValue),
            _ when TryGetInternalFailureException(out var internalFailureExceptionValue) => onInternalFailureException(
                internalFailureExceptionValue),
            _ when TryGetNotFoundException(out var notFoundExceptionValue) => onNotFoundException(
                notFoundExceptionValue),
            _ when TryGetUnauthorizedException(out var unauthorizedExceptionValue) => onUnauthorizedException(
                unauthorizedExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetIntrospectionSchemaError)} holds no value.")
        };

    public void Match(Action<GraphQlSchemaException> onGraphQlSchemaException,
        Action<InternalFailureException> onInternalFailureException,
        Action<NotFoundException> onNotFoundException,
        Action<UnauthorizedException> onUnauthorizedException,
        Action<RawError> otherwise)
    {
        if (TryGetGraphQlSchemaException(out var graphQlSchemaExceptionValue)) onGraphQlSchemaException(
            graphQlSchemaExceptionValue);
        else if (TryGetInternalFailureException(out var internalFailureExceptionValue)) onInternalFailureException(
            internalFailureExceptionValue);
        else if (TryGetNotFoundException(out var notFoundExceptionValue)) onNotFoundException(notFoundExceptionValue);
        else if (TryGetUnauthorizedException(out var unauthorizedExceptionValue)) onUnauthorizedException(
            unauthorizedExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetIntrospectionSchemaError)} holds no value.");
    }

    private static Task<GetIntrospectionSchemaError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<GraphQlSchemaException>().As(AsGraphQlSchemaException),
            401 => response.Json<UnauthorizedException>().As(AsUnauthorizedException),
            404 => response.Json<NotFoundException>().As(AsNotFoundException),
            500 => response.Json<InternalFailureException>().As(AsInternalFailureException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetIntrospectionSchemaError> Response { get; } = new(Create);
}
