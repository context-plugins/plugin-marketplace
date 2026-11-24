from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateFleetErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateFleetError:
    def map(self, status_code: int, content: bytes) -> CreateFleetErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_fleet_error_mapper: Final[ErrorMapper[CreateFleetErrorBody]] = _CreateFleetError()
