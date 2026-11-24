from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutRepositoriesByWorkspaceByRepoSlugErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutRepositoriesByWorkspaceByRepoSlugError:
    def map(self, status_code: int, content: bytes) -> PutRepositoriesByWorkspaceByRepoSlugErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_repositories_by_workspace_by_repo_slug_error_mapper: Final[
    ErrorMapper[PutRepositoriesByWorkspaceByRepoSlugErrorBody]
] = _PutRepositoriesByWorkspaceByRepoSlugError()
