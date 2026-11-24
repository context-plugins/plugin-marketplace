from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

GetGroupHistoricalUsageErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupHistoricalUsageError:
    def map(self, status_code: int, content: bytes) -> GetGroupHistoricalUsageErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


get_group_historical_usage_error_mapper: Final[
    ErrorMapper[GetGroupHistoricalUsageErrorBody]
] = _GetGroupHistoricalUsageError()
