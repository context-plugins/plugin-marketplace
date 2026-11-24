from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

GetCustomBitlinkMetricsByDestinationErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _GetCustomBitlinkMetricsByDestinationError:
    def map(self, status_code: int, content: bytes) -> GetCustomBitlinkMetricsByDestinationErrorBody:
        match status_code:
            case 402 | 403 | 404 | 410 | 500 | 503:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


get_custom_bitlink_metrics_by_destination_error_mapper: Final[
    ErrorMapper[GetCustomBitlinkMetricsByDestinationErrorBody]
] = _GetCustomBitlinkMetricsByDestinationError()
