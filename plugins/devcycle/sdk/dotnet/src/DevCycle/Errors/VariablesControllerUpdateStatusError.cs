using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class VariablesControllerUpdateStatusError : ApiError
{
    private readonly Optional<BadRequestErrorResponse> _badRequestErrorResponseValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<NotFoundErrorResponse> _notFoundErrorResponseValue;

    private readonly Optional<PreconditionFailedErrorResponse> _preconditionFailedErrorResponseValue;

    private VariablesControllerUpdateStatusError(Optional<BadRequestErrorResponse> badRequestErrorResponseValue,
        Optional<RawError> noContentValue,
        Optional<NotFoundErrorResponse> notFoundErrorResponseValue,
        Optional<PreconditionFailedErrorResponse> preconditionFailedErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestErrorResponseValue = badRequestErrorResponseValue;
        _noContentValue = noContentValue;
        _notFoundErrorResponseValue = notFoundErrorResponseValue;
        _preconditionFailedErrorResponseValue = preconditionFailedErrorResponseValue;
    }

    private static VariablesControllerUpdateStatusError AsBadRequestErrorResponse(BadRequestErrorResponse value) =>
        new(Optional<BadRequestErrorResponse>.Some(value), default, default, default, default);

    private static VariablesControllerUpdateStatusError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default, default, default);

    private static VariablesControllerUpdateStatusError AsNotFoundErrorResponse(NotFoundErrorResponse value) =>
        new(default, default, Optional<NotFoundErrorResponse>.Some(value), default, default);

    private static VariablesControllerUpdateStatusError AsPreconditionFailedErrorResponse(PreconditionFailedErrorResponse value) =>
        new(default, default, default, Optional<PreconditionFailedErrorResponse>.Some(value), default);

    private static VariablesControllerUpdateStatusError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value) =>
        _badRequestErrorResponseValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value) =>
        _notFoundErrorResponseValue.TryGetValue(out value);

    public bool TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value) =>
        _preconditionFailedErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestErrorResponse, TResult> onBadRequestErrorResponse,
        Func<RawError, TResult> onNoContent,
        Func<NotFoundErrorResponse, TResult> onNotFoundErrorResponse,
        Func<PreconditionFailedErrorResponse, TResult> onPreconditionFailedErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestErrorResponse(out var badRequestErrorResponseValue) => onBadRequestErrorResponse(
                badRequestErrorResponseValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue) => onNotFoundErrorResponse(
                notFoundErrorResponseValue),
            _ when TryGetPreconditionFailedErrorResponse(
                out var preconditionFailedErrorResponseValue) => onPreconditionFailedErrorResponse(
                preconditionFailedErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(VariablesControllerUpdateStatusError)} holds no value.")
        };

    public void Match(Action<BadRequestErrorResponse> onBadRequestErrorResponse,
        Action<RawError> onNoContent,
        Action<NotFoundErrorResponse> onNotFoundErrorResponse,
        Action<PreconditionFailedErrorResponse> onPreconditionFailedErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestErrorResponse(out var badRequestErrorResponseValue)) onBadRequestErrorResponse(
            badRequestErrorResponseValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue)) onNotFoundErrorResponse(
            notFoundErrorResponseValue);
        else if (TryGetPreconditionFailedErrorResponse(
            out var preconditionFailedErrorResponseValue)) onPreconditionFailedErrorResponse(
            preconditionFailedErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(VariablesControllerUpdateStatusError)} holds no value.");
    }

    private static Task<VariablesControllerUpdateStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestErrorResponse>().As(AsBadRequestErrorResponse),
            401 => response.RawBody().As(AsNoContent),
            404 => response.Json<NotFoundErrorResponse>().As(AsNotFoundErrorResponse),
            412 => response.Json<PreconditionFailedErrorResponse>().As(AsPreconditionFailedErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<VariablesControllerUpdateStatusError> Response { get; } = new(Create);
}
