using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class ProjectsControllerUpdateSettingsError : ApiError
{
    private readonly Optional<BadRequestErrorResponse> _badRequestErrorResponseValue;

    private readonly Optional<ConflictErrorResponse> _conflictErrorResponseValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<NotFoundErrorResponse> _notFoundErrorResponseValue;

    private ProjectsControllerUpdateSettingsError(Optional<BadRequestErrorResponse> badRequestErrorResponseValue,
        Optional<ConflictErrorResponse> conflictErrorResponseValue,
        Optional<RawError> noContentValue,
        Optional<NotFoundErrorResponse> notFoundErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestErrorResponseValue = badRequestErrorResponseValue;
        _conflictErrorResponseValue = conflictErrorResponseValue;
        _noContentValue = noContentValue;
        _notFoundErrorResponseValue = notFoundErrorResponseValue;
    }

    private static ProjectsControllerUpdateSettingsError AsBadRequestErrorResponse(BadRequestErrorResponse value) =>
        new(Optional<BadRequestErrorResponse>.Some(value), default, default, default, default);

    private static ProjectsControllerUpdateSettingsError AsConflictErrorResponse(ConflictErrorResponse value) =>
        new(default, Optional<ConflictErrorResponse>.Some(value), default, default, default);

    private static ProjectsControllerUpdateSettingsError AsNoContent(RawError value) =>
        new(default, default, Optional<RawError>.Some(value), default, default);

    private static ProjectsControllerUpdateSettingsError AsNotFoundErrorResponse(NotFoundErrorResponse value) =>
        new(default, default, default, Optional<NotFoundErrorResponse>.Some(value), default);

    private static ProjectsControllerUpdateSettingsError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value) =>
        _badRequestErrorResponseValue.TryGetValue(out value);

    public bool TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value) =>
        _conflictErrorResponseValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value) =>
        _notFoundErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestErrorResponse, TResult> onBadRequestErrorResponse,
        Func<ConflictErrorResponse, TResult> onConflictErrorResponse,
        Func<RawError, TResult> onNoContent,
        Func<NotFoundErrorResponse, TResult> onNotFoundErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestErrorResponse(out var badRequestErrorResponseValue) => onBadRequestErrorResponse(
                badRequestErrorResponseValue),
            _ when TryGetConflictErrorResponse(out var conflictErrorResponseValue) => onConflictErrorResponse(
                conflictErrorResponseValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue) => onNotFoundErrorResponse(
                notFoundErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ProjectsControllerUpdateSettingsError)} holds no value.")
        };

    public void Match(Action<BadRequestErrorResponse> onBadRequestErrorResponse,
        Action<ConflictErrorResponse> onConflictErrorResponse,
        Action<RawError> onNoContent,
        Action<NotFoundErrorResponse> onNotFoundErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestErrorResponse(out var badRequestErrorResponseValue)) onBadRequestErrorResponse(
            badRequestErrorResponseValue);
        else if (TryGetConflictErrorResponse(out var conflictErrorResponseValue)) onConflictErrorResponse(
            conflictErrorResponseValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue)) onNotFoundErrorResponse(
            notFoundErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ProjectsControllerUpdateSettingsError)} holds no value.");
    }

    private static Task<ProjectsControllerUpdateSettingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestErrorResponse>().As(AsBadRequestErrorResponse),
            403 => response.RawBody().As(AsNoContent),
            404 => response.Json<NotFoundErrorResponse>().As(AsNotFoundErrorResponse),
            409 => response.Json<ConflictErrorResponse>().As(AsConflictErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ProjectsControllerUpdateSettingsError> Response { get; } = new(Create);
}
