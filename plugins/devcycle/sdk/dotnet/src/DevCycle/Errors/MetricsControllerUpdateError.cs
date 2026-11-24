using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class MetricsControllerUpdateError : ApiError
{
    private readonly Optional<BadRequestErrorResponse> _badRequestErrorResponseValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<NotFoundErrorResponse> _notFoundErrorResponseValue;

    private MetricsControllerUpdateError(Optional<BadRequestErrorResponse> badRequestErrorResponseValue,
        Optional<RawError> noContentValue,
        Optional<NotFoundErrorResponse> notFoundErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestErrorResponseValue = badRequestErrorResponseValue;
        _noContentValue = noContentValue;
        _notFoundErrorResponseValue = notFoundErrorResponseValue;
    }

    private static MetricsControllerUpdateError AsBadRequestErrorResponse(BadRequestErrorResponse value) =>
        new(Optional<BadRequestErrorResponse>.Some(value), default, default, default);

    private static MetricsControllerUpdateError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default, default);

    private static MetricsControllerUpdateError AsNotFoundErrorResponse(NotFoundErrorResponse value) =>
        new(default, default, Optional<NotFoundErrorResponse>.Some(value), default);

    private static MetricsControllerUpdateError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value) =>
        _badRequestErrorResponseValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value) =>
        _notFoundErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestErrorResponse, TResult> onBadRequestErrorResponse,
        Func<RawError, TResult> onNoContent,
        Func<NotFoundErrorResponse, TResult> onNotFoundErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestErrorResponse(out var badRequestErrorResponseValue) => onBadRequestErrorResponse(
                badRequestErrorResponseValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue) => onNotFoundErrorResponse(
                notFoundErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MetricsControllerUpdateError)} holds no value.")
        };

    public void Match(Action<BadRequestErrorResponse> onBadRequestErrorResponse,
        Action<RawError> onNoContent,
        Action<NotFoundErrorResponse> onNotFoundErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestErrorResponse(out var badRequestErrorResponseValue)) onBadRequestErrorResponse(
            badRequestErrorResponseValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue)) onNotFoundErrorResponse(
            notFoundErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MetricsControllerUpdateError)} holds no value.");
    }

    private static Task<MetricsControllerUpdateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestErrorResponse>().As(AsBadRequestErrorResponse),
            401 or 403 => response.RawBody().As(AsNoContent),
            404 => response.Json<NotFoundErrorResponse>().As(AsNotFoundErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MetricsControllerUpdateError> Response { get; } = new(Create);
}
