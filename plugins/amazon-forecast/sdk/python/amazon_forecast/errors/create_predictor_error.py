from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreatePredictorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreatePredictorError:
    def map(self, status_code: int, content: bytes) -> CreatePredictorErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_predictor_error_mapper: Final[ErrorMapper[CreatePredictorErrorBody]] = _CreatePredictorError()
