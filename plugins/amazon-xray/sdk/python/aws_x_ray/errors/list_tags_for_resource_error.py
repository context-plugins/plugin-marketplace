from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.resource_not_found_exception import ResourceNotFoundException
from ..models.throttled_exception import ThrottledException

ListTagsForResourceErrorBody: TypeAlias = (
    InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError
)


@dataclass(frozen=True, slots=True)
class _ListTagsForResourceError:
    def map(self, status_code: int, content: bytes) -> ListTagsForResourceErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 404:
                return decode_json[ResourceNotFoundException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


list_tags_for_resource_error_mapper: Final[ErrorMapper[ListTagsForResourceErrorBody]] = _ListTagsForResourceError()
