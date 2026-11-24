from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

QualifyCounterpartyErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _QualifyCounterpartyError:
    def map(self, status_code: int, content: bytes) -> QualifyCounterpartyErrorBody:
        match status_code:
            case 400 | 401 | 402 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


qualify_counterparty_error_mapper: Final[ErrorMapper[QualifyCounterpartyErrorBody]] = _QualifyCounterpartyError()
