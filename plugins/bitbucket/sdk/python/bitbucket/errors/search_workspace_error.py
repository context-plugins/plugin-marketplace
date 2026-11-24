from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SearchWorkspaceErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SearchWorkspaceError:
    def map(self, status_code: int, content: bytes) -> SearchWorkspaceErrorBody:
        match status_code:
            case 400 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


search_workspace_error_mapper: Final[ErrorMapper[SearchWorkspaceErrorBody]] = _SearchWorkspaceError()
