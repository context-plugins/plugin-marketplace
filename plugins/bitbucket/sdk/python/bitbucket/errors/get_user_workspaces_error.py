from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetUserWorkspacesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetUserWorkspacesError:
    def map(self, status_code: int, content: bytes) -> GetUserWorkspacesErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_user_workspaces_error_mapper: Final[ErrorMapper[GetUserWorkspacesErrorBody]] = _GetUserWorkspacesError()
