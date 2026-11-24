from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateInterconnectErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateInterconnectError:
    def map(self, status_code: int, content: bytes) -> CreateInterconnectErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_interconnect_error_mapper: Final[ErrorMapper[CreateInterconnectErrorBody]] = _CreateInterconnectError()
