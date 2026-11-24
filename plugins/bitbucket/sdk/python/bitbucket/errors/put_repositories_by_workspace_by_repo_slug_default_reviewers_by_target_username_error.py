from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError:
    def map(
        self, status_code: int, content: bytes
    ) -> PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper: Final[
    ErrorMapper[PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]
] = _PutRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError()
