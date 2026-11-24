from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1WitnessV1WitnessPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1WitnessV1WitnessPostError:
    def map(self, status_code: int, content: bytes) -> V1WitnessV1WitnessPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_witness_v1_witness_post_error_mapper: Final[
    ErrorMapper[V1WitnessV1WitnessPostErrorBody]
] = _V1WitnessV1WitnessPostError()
