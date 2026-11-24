using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Models;
using Bitbucket.Models;

namespace Bitbucket.Errors;

public sealed class GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError(Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError AsError(Error value) =>
        new(Optional<Error>.Some(value), default);

    private static GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError)} holds no value.");
    }

    private static Task<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError> Response { get; } = new(
        Create);
}
