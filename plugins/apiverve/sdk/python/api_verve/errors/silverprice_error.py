from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SilverpriceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SilverpriceError:
    def map(self, status_code: int, content: bytes) -> SilverpriceErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


silverprice_error_mapper: Final[ErrorMapper[SilverpriceErrorBody]] = _SilverpriceError()
