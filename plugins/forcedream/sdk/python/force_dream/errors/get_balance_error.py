from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unauthorized1 import Unauthorized1

GetBalanceErrorBody: TypeAlias = Unauthorized1 | RawError


@dataclass(frozen=True, slots=True)
class _GetBalanceError:
    def map(self, status_code: int, content: bytes) -> GetBalanceErrorBody:
        match status_code:
            case 401:
                return decode_json[Unauthorized1](content)
            case _:
                return RawError(status_code, content)


get_balance_error_mapper: Final[ErrorMapper[GetBalanceErrorBody]] = _GetBalanceError()
