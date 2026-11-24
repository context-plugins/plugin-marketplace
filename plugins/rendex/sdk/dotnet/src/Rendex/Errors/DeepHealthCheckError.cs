using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Rendex.Core.ErrorResponse;
using Rendex.Core.Models;
using Rendex.Models;

namespace Rendex.Errors;

public sealed class DeepHealthCheckError : ApiError
{
    private readonly Optional<DeepHealthResponse> _deepHealthResponseValue;

    private DeepHealthCheckError(Optional<DeepHealthResponse> deepHealthResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _deepHealthResponseValue = deepHealthResponseValue;
    }

    private static DeepHealthCheckError AsDeepHealthResponse(DeepHealthResponse value) =>
        new(Optional<DeepHealthResponse>.Some(value), default);

    private static DeepHealthCheckError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetDeepHealthResponse([NotNullWhen(true)] out DeepHealthResponse? value) =>
        _deepHealthResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DeepHealthResponse, TResult> onDeepHealthResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDeepHealthResponse(out var deepHealthResponseValue) => onDeepHealthResponse(
                deepHealthResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeepHealthCheckError)} holds no value.")
        };

    public void Match(Action<DeepHealthResponse> onDeepHealthResponse, Action<RawError> otherwise)
    {
        if (TryGetDeepHealthResponse(out var deepHealthResponseValue)) onDeepHealthResponse(deepHealthResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeepHealthCheckError)} holds no value.");
    }

    private static Task<DeepHealthCheckError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            503 => response.Json<DeepHealthResponse>().As(AsDeepHealthResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeepHealthCheckError> Response { get; } = new(Create);
}
