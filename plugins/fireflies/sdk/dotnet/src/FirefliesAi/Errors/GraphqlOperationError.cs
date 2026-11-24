using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using FirefliesAi.Core.ErrorResponse;
using FirefliesAi.Core.Models;
using FirefliesAi.Models;

namespace FirefliesAi.Errors;

public sealed class GraphqlOperationError : ApiError
{
    private readonly Optional<GraphQlErrorResponse> _graphQlErrorResponseValue;

    private readonly Optional<RawError> _noContentValue;

    private GraphqlOperationError(Optional<GraphQlErrorResponse> graphQlErrorResponseValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _graphQlErrorResponseValue = graphQlErrorResponseValue;
        _noContentValue = noContentValue;
    }

    private static GraphqlOperationError AsGraphQlErrorResponse(GraphQlErrorResponse value) =>
        new(Optional<GraphQlErrorResponse>.Some(value), default, default);

    private static GraphqlOperationError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static GraphqlOperationError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetGraphQlErrorResponse([NotNullWhen(true)] out GraphQlErrorResponse? value) =>
        _graphQlErrorResponseValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GraphQlErrorResponse, TResult> onGraphQlErrorResponse,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGraphQlErrorResponse(out var graphQlErrorResponseValue) => onGraphQlErrorResponse(
                graphQlErrorResponseValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GraphqlOperationError)} holds no value.")
        };

    public void Match(Action<GraphQlErrorResponse> onGraphQlErrorResponse,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetGraphQlErrorResponse(out var graphQlErrorResponseValue)) onGraphQlErrorResponse(
            graphQlErrorResponseValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GraphqlOperationError)} holds no value.");
    }

    private static Task<GraphqlOperationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<GraphQlErrorResponse>().As(AsGraphQlErrorResponse),
            429 or 500 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GraphqlOperationError> Response { get; } = new(Create);
}
