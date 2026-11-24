using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class VariablesControllerRemoveError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<NotFoundErrorResponse> _notFoundErrorResponseValue;

    private readonly Optional<PreconditionFailedErrorResponse> _preconditionFailedErrorResponseValue;

    private VariablesControllerRemoveError(Optional<RawError> noContentValue,
        Optional<NotFoundErrorResponse> notFoundErrorResponseValue,
        Optional<PreconditionFailedErrorResponse> preconditionFailedErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _notFoundErrorResponseValue = notFoundErrorResponseValue;
        _preconditionFailedErrorResponseValue = preconditionFailedErrorResponseValue;
    }

    private static VariablesControllerRemoveError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default, default);

    private static VariablesControllerRemoveError AsNotFoundErrorResponse(NotFoundErrorResponse value) =>
        new(default, Optional<NotFoundErrorResponse>.Some(value), default, default);

    private static VariablesControllerRemoveError AsPreconditionFailedErrorResponse(PreconditionFailedErrorResponse value) =>
        new(default, default, Optional<PreconditionFailedErrorResponse>.Some(value), default);

    private static VariablesControllerRemoveError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value) =>
        _notFoundErrorResponseValue.TryGetValue(out value);

    public bool TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value) =>
        _preconditionFailedErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<NotFoundErrorResponse, TResult> onNotFoundErrorResponse,
        Func<PreconditionFailedErrorResponse, TResult> onPreconditionFailedErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue) => onNotFoundErrorResponse(
                notFoundErrorResponseValue),
            _ when TryGetPreconditionFailedErrorResponse(
                out var preconditionFailedErrorResponseValue) => onPreconditionFailedErrorResponse(
                preconditionFailedErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(VariablesControllerRemoveError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<NotFoundErrorResponse> onNotFoundErrorResponse,
        Action<PreconditionFailedErrorResponse> onPreconditionFailedErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue)) onNotFoundErrorResponse(
            notFoundErrorResponseValue);
        else if (TryGetPreconditionFailedErrorResponse(
            out var preconditionFailedErrorResponseValue)) onPreconditionFailedErrorResponse(
            preconditionFailedErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(VariablesControllerRemoveError)} holds no value.");
    }

    private static Task<VariablesControllerRemoveError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 => response.RawBody().As(AsNoContent),
            404 => response.Json<NotFoundErrorResponse>().As(AsNotFoundErrorResponse),
            412 => response.Json<PreconditionFailedErrorResponse>().As(AsPreconditionFailedErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<VariablesControllerRemoveError> Response { get; } = new(Create);
}
