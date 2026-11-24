from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListTagsForResourceErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListTagsForResourceError:
    def map(self, status_code: int, content: bytes) -> ListTagsForResourceErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_tags_for_resource_error_mapper: Final[ErrorMapper[ListTagsForResourceErrorBody]] = _ListTagsForResourceError()
