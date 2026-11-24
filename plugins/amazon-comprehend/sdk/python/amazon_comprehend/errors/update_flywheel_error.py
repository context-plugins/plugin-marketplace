from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateFlywheelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateFlywheelError:
    def map(self, status_code: int, content: bytes) -> UpdateFlywheelErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_flywheel_error_mapper: Final[ErrorMapper[UpdateFlywheelErrorBody]] = _UpdateFlywheelError()
