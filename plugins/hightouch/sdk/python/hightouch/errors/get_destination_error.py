from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetDestinationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetDestinationError:
    def map(self, status_code: int, content: bytes) -> GetDestinationErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_destination_error_mapper: Final[ErrorMapper[GetDestinationErrorBody]] = _GetDestinationError()
