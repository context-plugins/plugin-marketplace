from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

WebhooksControllerRemoveErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _WebhooksControllerRemoveError:
    def map(self, status_code: int, content: bytes) -> WebhooksControllerRemoveErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


webhooks_controller_remove_error_mapper: Final[
    ErrorMapper[WebhooksControllerRemoveErrorBody]
] = _WebhooksControllerRemoveError()
