from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

WebhooksControllerCreateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _WebhooksControllerCreateError:
    def map(self, status_code: int, content: bytes) -> WebhooksControllerCreateErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


webhooks_controller_create_error_mapper: Final[
    ErrorMapper[WebhooksControllerCreateErrorBody]
] = _WebhooksControllerCreateError()
