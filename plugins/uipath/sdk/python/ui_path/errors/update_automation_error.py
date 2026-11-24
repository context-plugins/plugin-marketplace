from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_automation_hub_app_inventory_api import (
    ErrorResponseUiPathAutomationHubAppInventoryApi,
)

UpdateAutomationErrorBody: TypeAlias = ErrorResponseUiPathAutomationHubAppInventoryApi | RawError


@dataclass(frozen=True, slots=True)
class _UpdateAutomationError:
    def map(self, status_code: int, content: bytes) -> UpdateAutomationErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[ErrorResponseUiPathAutomationHubAppInventoryApi](content)
            case _:
                return RawError(status_code, content)


update_automation_error_mapper: Final[ErrorMapper[UpdateAutomationErrorBody]] = _UpdateAutomationError()
