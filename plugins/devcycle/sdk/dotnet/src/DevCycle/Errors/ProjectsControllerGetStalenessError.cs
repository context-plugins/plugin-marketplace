using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class ProjectsControllerGetStalenessError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<NotFoundErrorResponse> _notFoundErrorResponseValue;

    private ProjectsControllerGetStalenessError(Optional<RawError> noContentValue,
        Optional<NotFoundErrorResponse> notFoundErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _notFoundErrorResponseValue = notFoundErrorResponseValue;
    }

    private static ProjectsControllerGetStalenessError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default);

    private static ProjectsControllerGetStalenessError AsNotFoundErrorResponse(NotFoundErrorResponse value) =>
        new(default, Optional<NotFoundErrorResponse>.Some(value), default);

    private static ProjectsControllerGetStalenessError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value) =>
        _notFoundErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<NotFoundErrorResponse, TResult> onNotFoundErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue) => onNotFoundErrorResponse(
                notFoundErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ProjectsControllerGetStalenessError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<NotFoundErrorResponse> onNotFoundErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetNotFoundErrorResponse(out var notFoundErrorResponseValue)) onNotFoundErrorResponse(
            notFoundErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ProjectsControllerGetStalenessError)} holds no value.");
    }

    private static Task<ProjectsControllerGetStalenessError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.RawBody().As(AsNoContent),
            404 => response.Json<NotFoundErrorResponse>().As(AsNotFoundErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ProjectsControllerGetStalenessError> Response { get; } = new(Create);
}
