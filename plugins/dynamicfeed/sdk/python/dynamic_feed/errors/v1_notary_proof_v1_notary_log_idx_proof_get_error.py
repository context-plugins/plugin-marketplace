from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1NotaryProofV1NotaryLogIdxProofGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1NotaryProofV1NotaryLogIdxProofGetError:
    def map(self, status_code: int, content: bytes) -> V1NotaryProofV1NotaryLogIdxProofGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_notary_proof_v1_notary_log_idx_proof_get_error_mapper: Final[
    ErrorMapper[V1NotaryProofV1NotaryLogIdxProofGetErrorBody]
] = _V1NotaryProofV1NotaryLogIdxProofGetError()
