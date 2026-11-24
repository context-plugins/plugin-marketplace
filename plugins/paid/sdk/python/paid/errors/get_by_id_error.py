from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetByIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetByIdError:
    def map(self, status_code: int, content: bytes) -> GetByIdErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_by_id_error_mapper: Final[ErrorMapper[GetByIdErrorBody]] = _GetByIdError()
