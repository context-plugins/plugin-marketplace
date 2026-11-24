from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

RealityCheckEpRealityCheckGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _RealityCheckEpRealityCheckGetError:
    def map(self, status_code: int, content: bytes) -> RealityCheckEpRealityCheckGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


reality_check_ep_reality_check_get_error_mapper: Final[
    ErrorMapper[RealityCheckEpRealityCheckGetErrorBody]
] = _RealityCheckEpRealityCheckGetError()
