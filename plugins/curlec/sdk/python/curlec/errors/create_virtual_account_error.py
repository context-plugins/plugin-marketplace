from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateVirtualAccountErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateVirtualAccountError:
    def map(self, status_code: int, content: bytes) -> CreateVirtualAccountErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_virtual_account_error_mapper: Final[ErrorMapper[CreateVirtualAccountErrorBody]] = _CreateVirtualAccountError()
