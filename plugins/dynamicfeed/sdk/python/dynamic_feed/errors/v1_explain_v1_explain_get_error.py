from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1ExplainV1ExplainGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1ExplainV1ExplainGetError:
    def map(self, status_code: int, content: bytes) -> V1ExplainV1ExplainGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_explain_v1_explain_get_error_mapper: Final[
    ErrorMapper[V1ExplainV1ExplainGetErrorBody]
] = _V1ExplainV1ExplainGetError()
