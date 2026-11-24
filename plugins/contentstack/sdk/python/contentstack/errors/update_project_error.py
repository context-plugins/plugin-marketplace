from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateProjectErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateProjectError:
    def map(self, status_code: int, content: bytes) -> UpdateProjectErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_project_error_mapper: Final[ErrorMapper[UpdateProjectErrorBody]] = _UpdateProjectError()
