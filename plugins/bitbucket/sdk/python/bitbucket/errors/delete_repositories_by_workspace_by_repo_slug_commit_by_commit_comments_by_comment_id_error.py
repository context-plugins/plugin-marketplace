from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError:
    def map(
        self, status_code: int, content: bytes
    ) -> DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error_mapper: Final[
    ErrorMapper[DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody]
] = _DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError()
