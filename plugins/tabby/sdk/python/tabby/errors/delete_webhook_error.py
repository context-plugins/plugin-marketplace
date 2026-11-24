from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error401_invalid_secret_key import Error401InvalidSecretKey
from ..models.error404_no_such_webhook import Error404NoSuchWebhook

DeleteWebhookErrorBody: TypeAlias = Error401InvalidSecretKey | Error404NoSuchWebhook | str | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWebhookError:
    def map(self, status_code: int, content: bytes) -> DeleteWebhookErrorBody:
        match status_code:
            case 401:
                return decode_json[Error401InvalidSecretKey](content)
            case 404:
                return decode_json[Error404NoSuchWebhook](content)
            case 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


delete_webhook_error_mapper: Final[ErrorMapper[DeleteWebhookErrorBody]] = _DeleteWebhookError()
