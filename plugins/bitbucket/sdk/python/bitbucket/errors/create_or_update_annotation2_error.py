from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateOrUpdateAnnotation2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateOrUpdateAnnotation2Error:
    def map(self, status_code: int, content: bytes) -> CreateOrUpdateAnnotation2ErrorBody:
        match status_code:
            case 400:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_or_update_annotation2_error_mapper: Final[
    ErrorMapper[CreateOrUpdateAnnotation2ErrorBody]
] = _CreateOrUpdateAnnotation2Error()
