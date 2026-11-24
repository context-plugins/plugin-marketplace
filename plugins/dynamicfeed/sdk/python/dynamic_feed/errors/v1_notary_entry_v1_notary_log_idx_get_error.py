from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1NotaryEntryV1NotaryLogIdxGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1NotaryEntryV1NotaryLogIdxGetError:
    def map(self, status_code: int, content: bytes) -> V1NotaryEntryV1NotaryLogIdxGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_notary_entry_v1_notary_log_idx_get_error_mapper: Final[
    ErrorMapper[V1NotaryEntryV1NotaryLogIdxGetErrorBody]
] = _V1NotaryEntryV1NotaryLogIdxGetError()
