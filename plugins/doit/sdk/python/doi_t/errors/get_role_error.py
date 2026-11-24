from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetRoleErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetRoleError:
    def map(self, status_code: int, content: bytes) -> GetRoleErrorBody:
        match status_code:
            case 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_role_error_mapper: Final[ErrorMapper[GetRoleErrorBody]] = _GetRoleError()
