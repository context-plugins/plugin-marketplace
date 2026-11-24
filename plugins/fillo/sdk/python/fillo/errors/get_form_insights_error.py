from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetFormInsightsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetFormInsightsError:
    def map(self, status_code: int, content: bytes) -> GetFormInsightsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_form_insights_error_mapper: Final[ErrorMapper[GetFormInsightsErrorBody]] = _GetFormInsightsError()
