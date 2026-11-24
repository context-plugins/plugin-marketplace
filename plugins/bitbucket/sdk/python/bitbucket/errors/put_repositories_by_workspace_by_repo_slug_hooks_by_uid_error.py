from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutRepositoriesByWorkspaceByRepoSlugHooksByUidError:
    def map(self, status_code: int, content: bytes) -> PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_repositories_by_workspace_by_repo_slug_hooks_by_uid_error_mapper: Final[
    ErrorMapper[PutRepositoriesByWorkspaceByRepoSlugHooksByUidErrorBody]
] = _PutRepositoriesByWorkspaceByRepoSlugHooksByUidError()
