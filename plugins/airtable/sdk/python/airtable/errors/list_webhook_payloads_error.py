from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListWebhookPayloadsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListWebhookPayloadsError:
    def map(self, status_code: int, content: bytes) -> ListWebhookPayloadsErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_webhook_payloads_error_mapper: Final[ErrorMapper[ListWebhookPayloadsErrorBody]] = _ListWebhookPayloadsError()
