from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateAlertErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateAlertError:
    def map(self, status_code: int, content: bytes) -> UpdateAlertErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_alert_error_mapper: Final[ErrorMapper[UpdateAlertErrorBody]] = _UpdateAlertError()
