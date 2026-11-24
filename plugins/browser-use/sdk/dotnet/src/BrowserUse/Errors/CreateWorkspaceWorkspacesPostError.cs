using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class CreateWorkspaceWorkspacesPostError : ApiError
{
    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private CreateWorkspaceWorkspacesPostError(Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _httpValidationErrorValue = httpValidationErrorValue;
    }

    private static CreateWorkspaceWorkspacesPostError AsHttpValidationError(HttpValidationError value) =>
        new(Optional<HttpValidationError>.Some(value), default);

    private static CreateWorkspaceWorkspacesPostError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateWorkspaceWorkspacesPostError)} holds no value.")
        };

    public void Match(Action<HttpValidationError> onHttpValidationError, Action<RawError> otherwise)
    {
        if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateWorkspaceWorkspacesPostError)} holds no value.");
    }

    private static Task<CreateWorkspaceWorkspacesPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateWorkspaceWorkspacesPostError> Response { get; } = new(Create);
}
