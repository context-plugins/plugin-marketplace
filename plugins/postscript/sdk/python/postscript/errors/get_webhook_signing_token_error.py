from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json

GetWebhookSigningTokenErrorBody: TypeAlias = Any | RawError


@dataclass(frozen=True, slots=True)
class _GetWebhookSigningTokenError:
    def map(self, status_code: int, content: bytes) -> GetWebhookSigningTokenErrorBody:
        match status_code:
            case 400:
                return decode_json[Any](content)
            case _:
                return RawError(status_code, content)


get_webhook_signing_token_error_mapper: Final[
    ErrorMapper[GetWebhookSigningTokenErrorBody]
] = _GetWebhookSigningTokenError()
