from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetUniversalAccountErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetUniversalAccountError:
    def map(self, status_code: int, content: bytes) -> GetUniversalAccountErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_universal_account_error_mapper: Final[ErrorMapper[GetUniversalAccountErrorBody]] = _GetUniversalAccountError()
