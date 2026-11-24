from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateWebhookErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateWebhookError:
    def map(self, status_code: int, content: bytes) -> UpdateWebhookErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_webhook_error_mapper: Final[ErrorMapper[UpdateWebhookErrorBody]] = _UpdateWebhookError()
