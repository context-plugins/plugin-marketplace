from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.model_not_found_exception1 import ModelNotFoundException1

MessagesShowErrorBody: TypeAlias = ModelNotFoundException1 | RawError


@dataclass(frozen=True, slots=True)
class _MessagesShowError:
    def map(self, status_code: int, content: bytes) -> MessagesShowErrorBody:
        match status_code:
            case 404:
                return decode_json[ModelNotFoundException1](content)
            case _:
                return RawError(status_code, content)


messages_show_error_mapper: Final[ErrorMapper[MessagesShowErrorBody]] = _MessagesShowError()
