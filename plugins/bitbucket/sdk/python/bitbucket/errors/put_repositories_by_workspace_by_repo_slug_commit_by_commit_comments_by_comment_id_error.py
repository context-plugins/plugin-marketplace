from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError:
    def map(
        self, status_code: int, content: bytes
    ) -> PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


put_repositories_by_workspace_by_repo_slug_commit_by_commit_comments_by_comment_id_error_mapper: Final[
    ErrorMapper[PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdErrorBody]
] = _PutRepositoriesByWorkspaceByRepoSlugCommitByCommitCommentsByCommentIdError()
