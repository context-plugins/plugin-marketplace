from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAdAccountInsightsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAdAccountInsightsError:
    def map(self, status_code: int, content: bytes) -> GetAdAccountInsightsErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_ad_account_insights_error_mapper: Final[ErrorMapper[GetAdAccountInsightsErrorBody]] = _GetAdAccountInsightsError()
