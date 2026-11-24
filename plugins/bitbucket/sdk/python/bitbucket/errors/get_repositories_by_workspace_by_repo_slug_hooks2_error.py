from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugHooks2Error:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_hooks2_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugHooks2ErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugHooks2Error()
