from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteWebhookErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteWebhookError:
    def map(self, status_code: int, content: bytes) -> DeleteWebhookErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_webhook_error_mapper: Final[ErrorMapper[DeleteWebhookErrorBody]] = _DeleteWebhookError()
