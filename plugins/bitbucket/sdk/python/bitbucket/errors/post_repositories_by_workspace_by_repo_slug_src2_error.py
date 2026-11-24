from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PostRepositoriesByWorkspaceByRepoSlugSrc2Error:
    def map(self, status_code: int, content: bytes) -> PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


post_repositories_by_workspace_by_repo_slug_src2_error_mapper: Final[
    ErrorMapper[PostRepositoriesByWorkspaceByRepoSlugSrc2ErrorBody]
] = _PostRepositoriesByWorkspaceByRepoSlugSrc2Error()
