from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetScanMetricsForQrCodeByDevicesOsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetScanMetricsForQrCodeByDevicesOsError:
    def map(self, status_code: int, content: bytes) -> GetScanMetricsForQrCodeByDevicesOsErrorBody:
        match status_code:
            case 400 | 402 | 403 | 404 | 410 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_scan_metrics_for_qr_code_by_devices_os_error_mapper: Final[
    ErrorMapper[GetScanMetricsForQrCodeByDevicesOsErrorBody]
] = _GetScanMetricsForQrCodeByDevicesOsError()
