from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

GetWebhookLogsErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetWebhookLogsError:
    def map(self, status_code: int, content: bytes) -> GetWebhookLogsErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


get_webhook_logs_error_mapper: Final[ErrorMapper[GetWebhookLogsErrorBody]] = _GetWebhookLogsError()
