from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1WitnessInclusionV1WitnessIdxInclusionGetError:
    def map(self, status_code: int, content: bytes) -> V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_witness_inclusion_v1_witness_idx_inclusion_get_error_mapper: Final[
    ErrorMapper[V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody]
] = _V1WitnessInclusionV1WitnessIdxInclusionGetError()
