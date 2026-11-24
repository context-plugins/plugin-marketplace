from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ShowWebhookByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ShowWebhookByIdError:
    def map(self, status_code: int, content: bytes) -> ShowWebhookByIdErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


show_webhook_by_id_error_mapper: Final[ErrorMapper[ShowWebhookByIdErrorBody]] = _ShowWebhookByIdError()
