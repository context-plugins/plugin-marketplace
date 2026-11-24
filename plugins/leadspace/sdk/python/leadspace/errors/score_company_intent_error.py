from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ScoreCompanyIntentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ScoreCompanyIntentError:
    def map(self, status_code: int, content: bytes) -> ScoreCompanyIntentErrorBody:
        match status_code:
            case 400 | 427 | 500:
                return decode_json[Error](content)
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


score_company_intent_error_mapper: Final[ErrorMapper[ScoreCompanyIntentErrorBody]] = _ScoreCompanyIntentError()
