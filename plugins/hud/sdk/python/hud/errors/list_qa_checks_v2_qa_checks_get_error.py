from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

ListQaChecksV2QaChecksGetErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListQaChecksV2QaChecksGetError:
    def map(self, status_code: int, content: bytes) -> ListQaChecksV2QaChecksGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


list_qa_checks_v2_qa_checks_get_error_mapper: Final[
    ErrorMapper[ListQaChecksV2QaChecksGetErrorBody]
] = _ListQaChecksV2QaChecksGetError()
