from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

AddVpaReceiverErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _AddVpaReceiverError:
    def map(self, status_code: int, content: bytes) -> AddVpaReceiverErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


add_vpa_receiver_error_mapper: Final[ErrorMapper[AddVpaReceiverErrorBody]] = _AddVpaReceiverError()
