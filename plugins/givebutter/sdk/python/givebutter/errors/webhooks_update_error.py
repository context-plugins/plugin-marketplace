from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.model_not_found_exception1 import ModelNotFoundException1
from ..models.validation_exception1 import ValidationException1

WebhooksUpdateErrorBody: TypeAlias = ModelNotFoundException1 | ValidationException1 | RawError


@dataclass(frozen=True, slots=True)
class _WebhooksUpdateError:
    def map(self, status_code: int, content: bytes) -> WebhooksUpdateErrorBody:
        match status_code:
            case 404:
                return decode_json[ModelNotFoundException1](content)
            case 422:
                return decode_json[ValidationException1](content)
            case _:
                return RawError(status_code, content)


webhooks_update_error_mapper: Final[ErrorMapper[WebhooksUpdateErrorBody]] = _WebhooksUpdateError()
