from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_automation_hub_app_inventory_api import (
    ErrorResponseUiPathAutomationHubAppInventoryApi,
)

BulkUpsertAppInventoryErrorBody: TypeAlias = ErrorResponseUiPathAutomationHubAppInventoryApi | RawError


@dataclass(frozen=True, slots=True)
class _BulkUpsertAppInventoryError:
    def map(self, status_code: int, content: bytes) -> BulkUpsertAppInventoryErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponseUiPathAutomationHubAppInventoryApi](content)
            case _:
                return RawError(status_code, content)


bulk_upsert_app_inventory_error_mapper: Final[
    ErrorMapper[BulkUpsertAppInventoryErrorBody]
] = _BulkUpsertAppInventoryError()
