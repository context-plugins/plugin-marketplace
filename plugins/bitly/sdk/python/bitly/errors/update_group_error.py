from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateGroupErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateGroupError:
    def map(self, status_code: int, content: bytes) -> UpdateGroupErrorBody:
        match status_code:
            case 400 | 403 | 404 | 422 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_group_error_mapper: Final[ErrorMapper[UpdateGroupErrorBody]] = _UpdateGroupError()
