from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CallingcodeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CallingcodeError:
    def map(self, status_code: int, content: bytes) -> CallingcodeErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


callingcode_error_mapper: Final[ErrorMapper[CallingcodeErrorBody]] = _CallingcodeError()
