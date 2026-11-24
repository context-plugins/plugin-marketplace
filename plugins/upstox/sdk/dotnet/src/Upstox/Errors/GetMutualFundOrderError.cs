using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Upstox.Core.ErrorResponse;
using Upstox.Core.Models;
using Upstox.Models;

namespace Upstox.Errors;

public sealed class GetMutualFundOrderError : ApiError
{
    private readonly Optional<ApiGatewayErrorResponse> _apiGatewayErrorResponseValue;

    private GetMutualFundOrderError(Optional<ApiGatewayErrorResponse> apiGatewayErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiGatewayErrorResponseValue = apiGatewayErrorResponseValue;
    }

    private static GetMutualFundOrderError AsApiGatewayErrorResponse(ApiGatewayErrorResponse value) =>
        new(Optional<ApiGatewayErrorResponse>.Some(value), default);

    private static GetMutualFundOrderError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value) =>
        _apiGatewayErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiGatewayErrorResponse, TResult> onApiGatewayErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiGatewayErrorResponse(out var apiGatewayErrorResponseValue) => onApiGatewayErrorResponse(
                apiGatewayErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetMutualFundOrderError)} holds no value.")
        };

    public void Match(Action<ApiGatewayErrorResponse> onApiGatewayErrorResponse, Action<RawError> otherwise)
    {
        if (TryGetApiGatewayErrorResponse(out var apiGatewayErrorResponseValue)) onApiGatewayErrorResponse(
            apiGatewayErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetMutualFundOrderError)} holds no value.");
    }

    private static Task<GetMutualFundOrderError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 405 or 422 or 423 or 429 or 500 => response.Json<ApiGatewayErrorResponse>().As(
                AsApiGatewayErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetMutualFundOrderError> Response { get; } = new(Create);
}
