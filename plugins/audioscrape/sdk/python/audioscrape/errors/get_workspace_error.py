from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

GetWorkspaceErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspaceError:
    def map(self, status_code: int, content: bytes) -> GetWorkspaceErrorBody:
        match status_code:
            case 401 | 402 | 403 | 404 | 429:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


get_workspace_error_mapper: Final[ErrorMapper[GetWorkspaceErrorBody]] = _GetWorkspaceError()
