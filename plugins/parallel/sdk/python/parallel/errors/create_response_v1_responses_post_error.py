from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

CreateResponseV1ResponsesPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _CreateResponseV1ResponsesPostError:
    def map(self, status_code: int, content: bytes) -> CreateResponseV1ResponsesPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


create_response_v1_responses_post_error_mapper: Final[
    ErrorMapper[CreateResponseV1ResponsesPostErrorBody]
] = _CreateResponseV1ResponsesPostError()
