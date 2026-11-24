from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ColorconverterErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ColorconverterError:
    def map(self, status_code: int, content: bytes) -> ColorconverterErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


colorconverter_error_mapper: Final[ErrorMapper[ColorconverterErrorBody]] = _ColorconverterError()
