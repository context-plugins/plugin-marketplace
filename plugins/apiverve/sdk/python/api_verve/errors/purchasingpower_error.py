from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PurchasingpowerErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PurchasingpowerError:
    def map(self, status_code: int, content: bytes) -> PurchasingpowerErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


purchasingpower_error_mapper: Final[ErrorMapper[PurchasingpowerErrorBody]] = _PurchasingpowerError()
