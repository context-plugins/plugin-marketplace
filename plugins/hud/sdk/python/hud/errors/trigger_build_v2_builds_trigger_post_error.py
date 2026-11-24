from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

TriggerBuildV2BuildsTriggerPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _TriggerBuildV2BuildsTriggerPostError:
    def map(self, status_code: int, content: bytes) -> TriggerBuildV2BuildsTriggerPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


trigger_build_v2_builds_trigger_post_error_mapper: Final[
    ErrorMapper[TriggerBuildV2BuildsTriggerPostErrorBody]
] = _TriggerBuildV2BuildsTriggerPostError()
