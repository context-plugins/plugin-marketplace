from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_automation_hub_app_inventory_api import (
    ErrorResponseUiPathAutomationHubAppInventoryApi,
)

ListRoles2ErrorBody: TypeAlias = ErrorResponseUiPathAutomationHubAppInventoryApi | RawError


@dataclass(frozen=True, slots=True)
class _ListRoles2Error:
    def map(self, status_code: int, content: bytes) -> ListRoles2ErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponseUiPathAutomationHubAppInventoryApi](content)
            case _:
                return RawError(status_code, content)


list_roles2_error_mapper: Final[ErrorMapper[ListRoles2ErrorBody]] = _ListRoles2Error()
