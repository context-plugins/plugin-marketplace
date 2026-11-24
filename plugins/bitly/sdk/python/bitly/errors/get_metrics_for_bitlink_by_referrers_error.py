from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

GetMetricsForBitlinkByReferrersErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _GetMetricsForBitlinkByReferrersError:
    def map(self, status_code: int, content: bytes) -> GetMetricsForBitlinkByReferrersErrorBody:
        match status_code:
            case 400 | 403 | 404 | 410 | 500 | 503:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


get_metrics_for_bitlink_by_referrers_error_mapper: Final[
    ErrorMapper[GetMetricsForBitlinkByReferrersErrorBody]
] = _GetMetricsForBitlinkByReferrersError()
