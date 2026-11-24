from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_gateway_error_response import ApiGatewayErrorResponse

UpdateKillSwitchErrorBody: TypeAlias = ApiGatewayErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateKillSwitchError:
    def map(self, status_code: int, content: bytes) -> UpdateKillSwitchErrorBody:
        match status_code:
            case 400 | 403 | 405 | 422 | 423 | 429 | 500:
                return decode_json[ApiGatewayErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_kill_switch_error_mapper: Final[ErrorMapper[UpdateKillSwitchErrorBody]] = _UpdateKillSwitchError()
