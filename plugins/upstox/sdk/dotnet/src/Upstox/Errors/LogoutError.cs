using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Upstox.Core.ErrorResponse;
using Upstox.Core.Models;
using Upstox.Models;

namespace Upstox.Errors;

public sealed class LogoutError : ApiError
{
    private readonly Optional<ApiGatewayErrorResponse> _apiGatewayErrorResponseValue;

    private readonly Optional<OAuthClientException> _oAuthClientExceptionValue;

    private LogoutError(Optional<ApiGatewayErrorResponse> apiGatewayErrorResponseValue,
        Optional<OAuthClientException> oAuthClientExceptionValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiGatewayErrorResponseValue = apiGatewayErrorResponseValue;
        _oAuthClientExceptionValue = oAuthClientExceptionValue;
    }

    private static LogoutError AsApiGatewayErrorResponse(ApiGatewayErrorResponse value) =>
        new(Optional<ApiGatewayErrorResponse>.Some(value), default, default);

    private static LogoutError AsOAuthClientException(OAuthClientException value) =>
        new(default, Optional<OAuthClientException>.Some(value), default);

    private static LogoutError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value) =>
        _apiGatewayErrorResponseValue.TryGetValue(out value);

    public bool TryGetOAuthClientException([NotNullWhen(true)] out OAuthClientException? value) =>
        _oAuthClientExceptionValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiGatewayErrorResponse, TResult> onApiGatewayErrorResponse,
        Func<OAuthClientException, TResult> onOAuthClientException,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiGatewayErrorResponse(out var apiGatewayErrorResponseValue) => onApiGatewayErrorResponse(
                apiGatewayErrorResponseValue),
            _ when TryGetOAuthClientException(out var oAuthClientExceptionValue) => onOAuthClientException(
                oAuthClientExceptionValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(LogoutError)} holds no value.")
        };

    public void Match(Action<ApiGatewayErrorResponse> onApiGatewayErrorResponse,
        Action<OAuthClientException> onOAuthClientException,
        Action<RawError> otherwise)
    {
        if (TryGetApiGatewayErrorResponse(out var apiGatewayErrorResponseValue)) onApiGatewayErrorResponse(
            apiGatewayErrorResponseValue);
        else if (TryGetOAuthClientException(out var oAuthClientExceptionValue)) onOAuthClientException(
            oAuthClientExceptionValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(LogoutError)} holds no value.");
    }

    private static Task<LogoutError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 405 or 422 or 423 or 429 or 500 => response.Json<ApiGatewayErrorResponse>().As(
                AsApiGatewayErrorResponse),
            401 => response.Json<OAuthClientException>().As(AsOAuthClientException),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<LogoutError> Response { get; } = new(Create);
}
