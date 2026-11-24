using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class ProjectsControllerFindAllError : ApiError
{
    private readonly Optional<BadRequestErrorResponse> _badRequestErrorResponseValue;

    private readonly Optional<RawError> _noContentValue;

    private ProjectsControllerFindAllError(Optional<BadRequestErrorResponse> badRequestErrorResponseValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _badRequestErrorResponseValue = badRequestErrorResponseValue;
        _noContentValue = noContentValue;
    }

    private static ProjectsControllerFindAllError AsBadRequestErrorResponse(BadRequestErrorResponse value) =>
        new(Optional<BadRequestErrorResponse>.Some(value), default, default);

    private static ProjectsControllerFindAllError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static ProjectsControllerFindAllError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value) =>
        _badRequestErrorResponseValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BadRequestErrorResponse, TResult> onBadRequestErrorResponse,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBadRequestErrorResponse(out var badRequestErrorResponseValue) => onBadRequestErrorResponse(
                badRequestErrorResponseValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ProjectsControllerFindAllError)} holds no value.")
        };

    public void Match(Action<BadRequestErrorResponse> onBadRequestErrorResponse,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetBadRequestErrorResponse(out var badRequestErrorResponseValue)) onBadRequestErrorResponse(
            badRequestErrorResponseValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ProjectsControllerFindAllError)} holds no value.");
    }

    private static Task<ProjectsControllerFindAllError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<BadRequestErrorResponse>().As(AsBadRequestErrorResponse),
            403 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ProjectsControllerFindAllError> Response { get; } = new(Create);
}
