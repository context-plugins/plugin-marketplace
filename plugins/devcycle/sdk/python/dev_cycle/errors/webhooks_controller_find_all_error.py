from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

WebhooksControllerFindAllErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _WebhooksControllerFindAllError:
    def map(self, status_code: int, content: bytes) -> WebhooksControllerFindAllErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


webhooks_controller_find_all_error_mapper: Final[
    ErrorMapper[WebhooksControllerFindAllErrorBody]
] = _WebhooksControllerFindAllError()
