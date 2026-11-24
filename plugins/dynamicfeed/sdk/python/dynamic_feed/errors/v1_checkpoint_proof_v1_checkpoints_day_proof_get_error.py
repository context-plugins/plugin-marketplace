from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1CheckpointProofV1CheckpointsDayProofGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1CheckpointProofV1CheckpointsDayProofGetError:
    def map(self, status_code: int, content: bytes) -> V1CheckpointProofV1CheckpointsDayProofGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_checkpoint_proof_v1_checkpoints_day_proof_get_error_mapper: Final[
    ErrorMapper[V1CheckpointProofV1CheckpointsDayProofGetErrorBody]
] = _V1CheckpointProofV1CheckpointsDayProofGetError()
