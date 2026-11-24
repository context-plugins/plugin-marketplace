from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAnnotationsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAnnotationsError:
    def map(self, status_code: int, content: bytes) -> ListAnnotationsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_annotations_error_mapper: Final[ErrorMapper[ListAnnotationsErrorBody]] = _ListAnnotationsError()
