from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError:
    def map(
        self, status_code: int, content: bytes
    ) -> PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_error_mapper: Final[
    ErrorMapper[PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsErrorBody]
] = _PostRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsError()
