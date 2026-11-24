from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAnnotation2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAnnotation2Error:
    def map(self, status_code: int, content: bytes) -> GetAnnotation2ErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_annotation2_error_mapper: Final[ErrorMapper[GetAnnotation2ErrorBody]] = _GetAnnotation2Error()
