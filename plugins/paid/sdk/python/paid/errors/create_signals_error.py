from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

CreateSignalsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _CreateSignalsError:
    def map(self, status_code: int, content: bytes) -> CreateSignalsErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


create_signals_error_mapper: Final[ErrorMapper[CreateSignalsErrorBody]] = _CreateSignalsError()
