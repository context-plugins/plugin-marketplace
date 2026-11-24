from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

AnalyticsdataPropertiesRunReportErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _AnalyticsdataPropertiesRunReportError:
    def map(self, status_code: int, content: bytes) -> AnalyticsdataPropertiesRunReportErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


analyticsdata_properties_run_report_error_mapper: Final[
    ErrorMapper[AnalyticsdataPropertiesRunReportErrorBody]
] = _AnalyticsdataPropertiesRunReportError()
