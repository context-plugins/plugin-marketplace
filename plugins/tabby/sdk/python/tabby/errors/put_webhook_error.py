from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error401_authorization import Error401Authorization
from ..models.error401_invalid_secret_key import Error401InvalidSecretKey
from ..models.error403 import Error403
from ..models.error404_no_such_webhook import Error404NoSuchWebhook

PutWebhookErrorBody: TypeAlias = (
    Error401InvalidSecretKey | Error401Authorization | Error403 | Error404NoSuchWebhook | str | RawError
)


@dataclass(frozen=True, slots=True)
class _PutWebhookError:
    def map(self, status_code: int, content: bytes) -> PutWebhookErrorBody:
        match status_code:
            case 400:
                return decode_json[Error401InvalidSecretKey](content)
            case 401:
                return decode_json[Error401Authorization](content)
            case 403:
                return decode_json[Error403](content)
            case 404:
                return decode_json[Error404NoSuchWebhook](content)
            case 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


put_webhook_error_mapper: Final[ErrorMapper[PutWebhookErrorBody]] = _PutWebhookError()
