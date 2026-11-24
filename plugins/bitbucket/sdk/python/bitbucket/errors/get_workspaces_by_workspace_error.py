from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspaceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspaceError:
    def map(self, status_code: int, content: bytes) -> GetWorkspacesByWorkspaceErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspaceErrorBody]
] = _GetWorkspacesByWorkspaceError()
