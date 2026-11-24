from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

GetClicksSummaryForBitlinkErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _GetClicksSummaryForBitlinkError:
    def map(self, status_code: int, content: bytes) -> GetClicksSummaryForBitlinkErrorBody:
        match status_code:
            case 403 | 404 | 500 | 503:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


get_clicks_summary_for_bitlink_error_mapper: Final[
    ErrorMapper[GetClicksSummaryForBitlinkErrorBody]
] = _GetClicksSummaryForBitlinkError()
