from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateTapesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateTapesError:
    def map(self, status_code: int, content: bytes) -> CreateTapesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_tapes_error_mapper: Final[ErrorMapper[CreateTapesErrorBody]] = _CreateTapesError()
