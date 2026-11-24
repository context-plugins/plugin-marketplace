from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_by_repo_slug_hooks_by_uid2_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceByRepoSlugHooksByUid2ErrorBody]
] = _GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error()
