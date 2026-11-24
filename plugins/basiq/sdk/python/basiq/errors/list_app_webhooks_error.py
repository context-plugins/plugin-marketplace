from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListAppWebhooksErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListAppWebhooksError:
    def map(self, status_code: int, content: bytes) -> ListAppWebhooksErrorBody:
        match status_code:
            case 401 | 403 | 429 | 503:
                return decode_json[Error](content)
            case 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_app_webhooks_error_mapper: Final[ErrorMapper[ListAppWebhooksErrorBody]] = _ListAppWebhooksError()
