from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetAccountErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetAccountError:
    def map(self, status_code: int, content: bytes) -> GetAccountErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_account_error_mapper: Final[ErrorMapper[GetAccountErrorBody]] = _GetAccountError()
