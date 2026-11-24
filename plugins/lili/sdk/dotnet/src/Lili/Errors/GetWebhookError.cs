using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Lili.Core.ErrorResponse;
using Lili.Core.Models;
using Lili.Models;

namespace Lili.Errors;

public sealed class GetWebhookError : ApiError
{
    private readonly Optional<JsonErrorResponse> _jsonErrorResponseValue;

    private GetWebhookError(Optional<JsonErrorResponse> jsonErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _jsonErrorResponseValue = jsonErrorResponseValue;
    }

    private static GetWebhookError AsJsonErrorResponse(JsonErrorResponse value) =>
        new(Optional<JsonErrorResponse>.Some(value), default);

    private static GetWebhookError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetJsonErrorResponse([NotNullWhen(true)] out JsonErrorResponse? value) =>
        _jsonErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<JsonErrorResponse, TResult> onJsonErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJsonErrorResponse(out var jsonErrorResponseValue) => onJsonErrorResponse(
                jsonErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetWebhookError)} holds no value.")
        };

    public void Match(Action<JsonErrorResponse> onJsonErrorResponse, Action<RawError> otherwise)
    {
        if (TryGetJsonErrorResponse(out var jsonErrorResponseValue)) onJsonErrorResponse(jsonErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetWebhookError)} holds no value.");
    }

    private static Task<GetWebhookError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<JsonErrorResponse>().As(AsJsonErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetWebhookError> Response { get; } = new(Create);
}
