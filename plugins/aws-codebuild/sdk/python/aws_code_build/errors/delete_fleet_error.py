from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteFleetErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteFleetError:
    def map(self, status_code: int, content: bytes) -> DeleteFleetErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_fleet_error_mapper: Final[ErrorMapper[DeleteFleetErrorBody]] = _DeleteFleetError()
