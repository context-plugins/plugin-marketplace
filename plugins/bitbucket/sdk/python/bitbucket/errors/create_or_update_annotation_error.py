from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateOrUpdateAnnotationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateOrUpdateAnnotationError:
    def map(self, status_code: int, content: bytes) -> CreateOrUpdateAnnotationErrorBody:
        match status_code:
            case 400:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_or_update_annotation_error_mapper: Final[
    ErrorMapper[CreateOrUpdateAnnotationErrorBody]
] = _CreateOrUpdateAnnotationError()
