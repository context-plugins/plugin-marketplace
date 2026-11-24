from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bad_request_exception import BadRequestException
from ..models.internal_failure_exception import InternalFailureException
from ..models.limit_exceeded_exception import LimitExceededException
from ..models.not_found_exception import NotFoundException

ListTagsForResource1ErrorBody: TypeAlias = (
    BadRequestException | NotFoundException | LimitExceededException | InternalFailureException | RawError
)


@dataclass(frozen=True, slots=True)
class _ListTagsForResource1Error:
    def map(self, status_code: int, content: bytes) -> ListTagsForResource1ErrorBody:
        match status_code:
            case 400:
                return decode_json[BadRequestException](content)
            case 404:
                return decode_json[NotFoundException](content)
            case 429:
                return decode_json[LimitExceededException](content)
            case 500:
                return decode_json[InternalFailureException](content)
            case _:
                return RawError(status_code, content)


list_tags_for_resource1_error_mapper: Final[ErrorMapper[ListTagsForResource1ErrorBody]] = _ListTagsForResource1Error()
