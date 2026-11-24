from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1NotarizeV1NotarizePostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1NotarizeV1NotarizePostError:
    def map(self, status_code: int, content: bytes) -> V1NotarizeV1NotarizePostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_notarize_v1_notarize_post_error_mapper: Final[
    ErrorMapper[V1NotarizeV1NotarizePostErrorBody]
] = _V1NotarizeV1NotarizePostError()
