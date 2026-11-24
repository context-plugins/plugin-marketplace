from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteFaxErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteFaxError:
    def map(self, status_code: int, content: bytes) -> DeleteFaxErrorBody:
        match status_code:
            case 401 | 404 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_fax_error_mapper: Final[ErrorMapper[DeleteFaxErrorBody]] = _DeleteFaxError()
