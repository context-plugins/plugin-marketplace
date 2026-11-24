from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetWebhookEventTypesErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetWebhookEventTypesError:
    def map(self, status_code: int, content: bytes) -> GetWebhookEventTypesErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_webhook_event_types_error_mapper: Final[ErrorMapper[GetWebhookEventTypesErrorBody]] = _GetWebhookEventTypesError()
