using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class ProjectsControllerRemoveError : ApiError
{
    private readonly Optional<CannotDeleteLastItemErrorResponse> _cannotDeleteLastItemErrorResponseValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<NotFoundErrorResponse> _notFoundErrorResponseValue;

    private ProjectsControllerRemoveError(Optional<CannotDeleteLastItemErrorResponse> cannotDeleteLastItemErrorResponseValue,
        Optional<RawError> noContentValue,
        Optional<NotFoundErrorResponse> notFoundErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _cannotDeleteLastItemErrorResponseValue = cannotDeleteLastItemErrorResponseValue;
        _noContentValue = noContentValue;
        _notFoundErrorResponseValue = notFoundErrorResponseValue;
    }

    private static ProjectsControllerRemoveError AsCannotDeleteLastItemErrorResponse(CannotDeleteLastItemErrorResponse value) =>
        new(Optional<CannotDeleteLastItemErrorResponse>.Some(value), default, default, default);

    private static ProjectsControllerRemoveError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default, default);

    private static ProjectsControllerRemoveError AsNotFoundErrorResponse(NotFoundErrorResponse value) =>
        new(default, default, Optional<NotFoundErrorResponse>.Some(value), default);

    private static ProjectsControllerRemoveError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetCannotDeleteLastItemErrorResponse([NotNullWhen(true)] out CannotDeleteLastItemErrorResponse? value) =>
        _cannotDeleteLastItemErrorResponseValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value) =>
        _notFoundErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<CannotDeleteLastItemErrorResponse, TResult> onCannotDeleteLastItemErrorResponse,
        Func<RawError, TResult> onNoContent,
        Func<NotFoundErrorResponse, TResult> onNotFoundErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCannotDeleteLastItemErrorResponse(
                out var cannotDeleteLastItemErrorResponseValue) => onCannotDeleteLastItemErrorResponse(
                cannotDeleteLastItemErrorResponseValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue) => onNotFoundErrorResponse(
                notFoundErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ProjectsControllerRemoveError)} holds no value.")
        };

    public void Match(Action<CannotDeleteLastItemErrorResponse> onCannotDeleteLastItemErrorResponse,
        Action<RawError> onNoContent,
        Action<NotFoundErrorResponse> onNotFoundErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetCannotDeleteLastItemErrorResponse(
            out var cannotDeleteLastItemErrorResponseValue)) onCannotDeleteLastItemErrorResponse(
            cannotDeleteLastItemErrorResponseValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue)) onNotFoundErrorResponse(
            notFoundErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ProjectsControllerRemoveError)} holds no value.");
    }

    private static Task<ProjectsControllerRemoveError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.RawBody().As(AsNoContent),
            404 => response.Json<NotFoundErrorResponse>().As(AsNotFoundErrorResponse),
            405 => response.Json<CannotDeleteLastItemErrorResponse>().As(AsCannotDeleteLastItemErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ProjectsControllerRemoveError> Response { get; } = new(Create);
}
