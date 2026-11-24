from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CancelCallErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CancelCallError:
    def map(self, status_code: int, content: bytes) -> CancelCallErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


cancel_call_error_mapper: Final[ErrorMapper[CancelCallErrorBody]] = _CancelCallError()
