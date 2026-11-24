from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

CreateSendToErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _CreateSendToError:
    def map(self, status_code: int, content: bytes) -> CreateSendToErrorBody:
        match status_code:
            case 400 | 401 | 406 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


create_send_to_error_mapper: Final[ErrorMapper[CreateSendToErrorBody]] = _CreateSendToError()
