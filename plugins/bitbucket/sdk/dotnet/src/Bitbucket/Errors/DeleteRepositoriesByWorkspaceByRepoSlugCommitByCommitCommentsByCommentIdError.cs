using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Models;

namespace Bitbucket.Errors;

public sealed class DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError)} holds no value.");
    }

    private static Task<DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError> Response { get; } = new(
        Create);
}
