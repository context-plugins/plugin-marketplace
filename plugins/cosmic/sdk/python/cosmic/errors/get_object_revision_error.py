from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetObjectRevisionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetObjectRevisionError:
    def map(self, status_code: int, content: bytes) -> GetObjectRevisionErrorBody:
        match status_code:
            case 400 | 401 | 402 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_object_revision_error_mapper: Final[ErrorMapper[GetObjectRevisionErrorBody]] = _GetObjectRevisionError()
