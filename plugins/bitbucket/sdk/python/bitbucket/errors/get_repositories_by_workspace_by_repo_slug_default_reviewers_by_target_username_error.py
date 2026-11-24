from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError:
    def map(
        self, status_code: int, content: bytes
    ) -> GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_default_reviewers_by_target_username_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameError()
