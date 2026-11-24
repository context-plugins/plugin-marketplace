from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateGatewaySoftwareNowErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateGatewaySoftwareNowError:
    def map(self, status_code: int, content: bytes) -> UpdateGatewaySoftwareNowErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_gateway_software_now_error_mapper: Final[
    ErrorMapper[UpdateGatewaySoftwareNowErrorBody]
] = _UpdateGatewaySoftwareNowError()
