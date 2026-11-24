from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetMetricsForBitlinkByReferrerNameErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetMetricsForBitlinkByReferrerNameError:
    def map(self, status_code: int, content: bytes) -> GetMetricsForBitlinkByReferrerNameErrorBody:
        match status_code:
            case 400 | 403 | 404 | 410 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_metrics_for_bitlink_by_referrer_name_error_mapper: Final[
    ErrorMapper[GetMetricsForBitlinkByReferrerNameErrorBody]
] = _GetMetricsForBitlinkByReferrerNameError()
