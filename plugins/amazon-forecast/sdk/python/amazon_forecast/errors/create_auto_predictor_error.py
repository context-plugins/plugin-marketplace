from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateAutoPredictorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateAutoPredictorError:
    def map(self, status_code: int, content: bytes) -> CreateAutoPredictorErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_auto_predictor_error_mapper: Final[ErrorMapper[CreateAutoPredictorErrorBody]] = _CreateAutoPredictorError()
