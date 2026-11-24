from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError:
    def map(
        self, status_code: int, content: bytes
    ) -> DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_repositories_by_workspace_by_repo_slug_commit_by_commit_approve_error_mapper: Final[
    ErrorMapper[DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveErrorBody]
] = _DeleteRepositoriesByWorkspaceByRepoSlugCommitByCommitApproveError()
