from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateSipTrunkErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateSipTrunkError:
    def map(self, status_code: int, content: bytes) -> CreateSipTrunkErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_sip_trunk_error_mapper: Final[ErrorMapper[CreateSipTrunkErrorBody]] = _CreateSipTrunkError()
