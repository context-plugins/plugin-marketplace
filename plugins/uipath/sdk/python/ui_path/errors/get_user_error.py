from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response3 import ErrorResponse3
from ..models.error_response_ui_path_automation_hub_app_inventory_api import (
    ErrorResponseUiPathAutomationHubAppInventoryApi,
)

GetUserErrorBody: TypeAlias = ErrorResponseUiPathAutomationHubAppInventoryApi | ErrorResponse3 | RawError


@dataclass(frozen=True, slots=True)
class _GetUserError:
    def map(self, status_code: int, content: bytes) -> GetUserErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseUiPathAutomationHubAppInventoryApi](content)
            case 404:
                return decode_json[ErrorResponse3](content)
            case _:
                return RawError(status_code, content)


get_user_error_mapper: Final[ErrorMapper[GetUserErrorBody]] = _GetUserError()
