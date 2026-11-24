from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateFlywheelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateFlywheelError:
    def map(self, status_code: int, content: bytes) -> CreateFlywheelErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_flywheel_error_mapper: Final[ErrorMapper[CreateFlywheelErrorBody]] = _CreateFlywheelError()
