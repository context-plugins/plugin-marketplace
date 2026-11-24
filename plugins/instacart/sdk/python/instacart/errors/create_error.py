from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateError:
    def map(self, status_code: int, content: bytes) -> CreateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_error_mapper: Final[ErrorMapper[CreateErrorBody]] = _CreateError()
