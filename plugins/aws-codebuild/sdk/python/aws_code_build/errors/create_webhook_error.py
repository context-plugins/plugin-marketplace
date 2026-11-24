from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateWebhookErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateWebhookError:
    def map(self, status_code: int, content: bytes) -> CreateWebhookErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_webhook_error_mapper: Final[ErrorMapper[CreateWebhookErrorBody]] = _CreateWebhookError()
