from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1StampV1StampPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1StampV1StampPostError:
    def map(self, status_code: int, content: bytes) -> V1StampV1StampPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_stamp_v1_stamp_post_error_mapper: Final[ErrorMapper[V1StampV1StampPostErrorBody]] = _V1StampV1StampPostError()
