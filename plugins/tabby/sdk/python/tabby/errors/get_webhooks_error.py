from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error401_authorization import Error401Authorization

GetWebhooksErrorBody: TypeAlias = Error401Authorization | str | RawError


@dataclass(frozen=True, slots=True)
class _GetWebhooksError:
    def map(self, status_code: int, content: bytes) -> GetWebhooksErrorBody:
        match status_code:
            case 401:
                return decode_json[Error401Authorization](content)
            case 404 | 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_webhooks_error_mapper: Final[ErrorMapper[GetWebhooksErrorBody]] = _GetWebhooksError()
