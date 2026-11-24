from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPublicDashboardErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPublicDashboardError:
    def map(self, status_code: int, content: bytes) -> GetPublicDashboardErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_public_dashboard_error_mapper: Final[ErrorMapper[GetPublicDashboardErrorBody]] = _GetPublicDashboardError()
