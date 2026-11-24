from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateFleetErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateFleetError:
    def map(self, status_code: int, content: bytes) -> UpdateFleetErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_fleet_error_mapper: Final[ErrorMapper[UpdateFleetErrorBody]] = _UpdateFleetError()
