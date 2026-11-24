from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetGroupMetricsByReferringNetworksErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupMetricsByReferringNetworksError:
    def map(self, status_code: int, content: bytes) -> GetGroupMetricsByReferringNetworksErrorBody:
        match status_code:
            case 403 | 404 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_group_metrics_by_referring_networks_error_mapper: Final[
    ErrorMapper[GetGroupMetricsByReferringNetworksErrorBody]
] = _GetGroupMetricsByReferringNetworksError()
