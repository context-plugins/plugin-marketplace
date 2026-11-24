from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

AnalyticsadminPropertiesConversionEventsGetErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _AnalyticsadminPropertiesConversionEventsGetError:
    def map(self, status_code: int, content: bytes) -> AnalyticsadminPropertiesConversionEventsGetErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


analyticsadmin_properties_conversion_events_get_error_mapper: Final[
    ErrorMapper[AnalyticsadminPropertiesConversionEventsGetErrorBody]
] = _AnalyticsadminPropertiesConversionEventsGetError()
