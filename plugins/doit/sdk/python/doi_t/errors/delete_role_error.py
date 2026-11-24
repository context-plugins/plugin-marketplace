from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteRoleErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteRoleError:
    def map(self, status_code: int, content: bytes) -> DeleteRoleErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_role_error_mapper: Final[ErrorMapper[DeleteRoleErrorBody]] = _DeleteRoleError()
