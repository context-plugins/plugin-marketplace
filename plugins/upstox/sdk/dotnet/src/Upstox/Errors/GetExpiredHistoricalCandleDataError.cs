using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Upstox.Core.ErrorResponse;
using Upstox.Core.Models;
using Upstox.Models;

namespace Upstox.Errors;

public sealed class GetExpiredHistoricalCandleDataError : ApiError
{
    private readonly Optional<ApiGatewayErrorResponse> _apiGatewayErrorResponseValue;

    private GetExpiredHistoricalCandleDataError(Optional<ApiGatewayErrorResponse> apiGatewayErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiGatewayErrorResponseValue = apiGatewayErrorResponseValue;
    }

    private static GetExpiredHistoricalCandleDataError AsApiGatewayErrorResponse(ApiGatewayErrorResponse value) =>
        new(Optional<ApiGatewayErrorResponse>.Some(value), default);

    private static GetExpiredHistoricalCandleDataError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value) =>
        _apiGatewayErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiGatewayErrorResponse, TResult> onApiGatewayErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiGatewayErrorResponse(out var apiGatewayErrorResponseValue) => onApiGatewayErrorResponse(
                apiGatewayErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetExpiredHistoricalCandleDataError)} holds no value.")
        };

    public void Match(Action<ApiGatewayErrorResponse> onApiGatewayErrorResponse, Action<RawError> otherwise)
    {
        if (TryGetApiGatewayErrorResponse(out var apiGatewayErrorResponseValue)) onApiGatewayErrorResponse(
            apiGatewayErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetExpiredHistoricalCandleDataError)} holds no value.");
    }

    private static Task<GetExpiredHistoricalCandleDataError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 405 or 422 or 423 or 429 or 500 => response.Json<ApiGatewayErrorResponse>().As(
                AsApiGatewayErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetExpiredHistoricalCandleDataError> Response { get; } = new(Create);
}
