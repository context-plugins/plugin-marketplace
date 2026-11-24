using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Models;
using Bitbucket.Models;

namespace Bitbucket.Errors;

public sealed class PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError(Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError AsError(Error value) =>
        new(Optional<Error>.Some(value), default);

    private static PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError)} holds no value.");
    }

    private static Task<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError> Response { get; } = new(
        Create);
}
