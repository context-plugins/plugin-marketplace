from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostWebhooksErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostWebhooksError:
    def map(self, status_code: int, content: bytes) -> PostWebhooksErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_webhooks_error_mapper: Final[ErrorMapper[PostWebhooksErrorBody]] = _PostWebhooksError()
