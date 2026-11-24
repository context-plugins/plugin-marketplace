from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unauthenticated1 import Unauthenticated1

GetAccountCreditsErrorBody: TypeAlias = Unauthenticated1 | RawError


@dataclass(frozen=True, slots=True)
class _GetAccountCreditsError:
    def map(self, status_code: int, content: bytes) -> GetAccountCreditsErrorBody:
        match status_code:
            case 401:
                return decode_json[Unauthenticated1](content)
            case _:
                return RawError(status_code, content)


get_account_credits_error_mapper: Final[ErrorMapper[GetAccountCreditsErrorBody]] = _GetAccountCreditsError()
