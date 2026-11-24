using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Models;
using Bitbucket.Models;

namespace Bitbucket.Errors;

public sealed class PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError(Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError AsError(Error value) =>
        new(Optional<Error>.Some(value), default);

    private static PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError)} holds no value.");
    }

    private static Task<PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 404 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError> Response { get; } = new(
        Create);
}
