from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetResourcePermissionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetResourcePermissionError:
    def map(self, status_code: int, content: bytes) -> GetResourcePermissionErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_resource_permission_error_mapper: Final[ErrorMapper[GetResourcePermissionErrorBody]] = _GetResourcePermissionError()
