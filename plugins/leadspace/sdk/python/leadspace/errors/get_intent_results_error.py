from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetIntentResultsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetIntentResultsError:
    def map(self, status_code: int, content: bytes) -> GetIntentResultsErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_intent_results_error_mapper: Final[ErrorMapper[GetIntentResultsErrorBody]] = _GetIntentResultsError()
