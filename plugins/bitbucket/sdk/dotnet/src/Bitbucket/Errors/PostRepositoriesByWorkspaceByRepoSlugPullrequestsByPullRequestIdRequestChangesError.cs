using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Models;
using Bitbucket.Models;

namespace Bitbucket.Errors;

public sealed class PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError(Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError AsError(Error value) =>
        new(Optional<Error>.Some(value), default);

    private static PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError)} holds no value.");
    }

    private static Task<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdRequestChangesError> Response { get; } = new(
        Create);
}
