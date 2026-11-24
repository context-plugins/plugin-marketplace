from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRepositoriesByWorkspaceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRepositoriesByWorkspaceError:
    def map(self, status_code: int, content: bytes) -> GetRepositoriesByWorkspaceErrorBody:
        match status_code:
            case 404 | 410:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_repositories_by_workspace_error_mapper: Final[
    ErrorMapper[GetRepositoriesByWorkspaceErrorBody]
] = _GetRepositoriesByWorkspaceError()
