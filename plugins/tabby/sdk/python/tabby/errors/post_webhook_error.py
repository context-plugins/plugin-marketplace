from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error401_authorization import Error401Authorization
from ..models.error401_invalid_secret_key import Error401InvalidSecretKey

PostWebhookErrorBody: TypeAlias = Error401InvalidSecretKey | Error401Authorization | str | RawError


@dataclass(frozen=True, slots=True)
class _PostWebhookError:
    def map(self, status_code: int, content: bytes) -> PostWebhookErrorBody:
        match status_code:
            case 400:
                return decode_json[Error401InvalidSecretKey](content)
            case 401:
                return decode_json[Error401Authorization](content)
            case 404 | 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


post_webhook_error_mapper: Final[ErrorMapper[PostWebhookErrorBody]] = _PostWebhookError()
