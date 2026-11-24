from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

TransferCallErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _TransferCallError:
    def map(self, status_code: int, content: bytes) -> TransferCallErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409 | 422 | 502:
                return RawError(status_code, content)
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


transfer_call_error_mapper: Final[ErrorMapper[TransferCallErrorBody]] = _TransferCallError()
