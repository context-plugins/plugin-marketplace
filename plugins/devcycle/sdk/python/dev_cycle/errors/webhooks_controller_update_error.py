from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

WebhooksControllerUpdateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _WebhooksControllerUpdateError:
    def map(self, status_code: int, content: bytes) -> WebhooksControllerUpdateErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


webhooks_controller_update_error_mapper: Final[
    ErrorMapper[WebhooksControllerUpdateErrorBody]
] = _WebhooksControllerUpdateError()
