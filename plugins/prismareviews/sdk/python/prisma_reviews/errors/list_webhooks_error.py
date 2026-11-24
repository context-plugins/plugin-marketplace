from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListWebhooksErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListWebhooksError:
    def map(self, status_code: int, content: bytes) -> ListWebhooksErrorBody:
        match status_code:
            case 401 | 403 | 429 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_webhooks_error_mapper: Final[ErrorMapper[ListWebhooksErrorBody]] = _ListWebhooksError()
