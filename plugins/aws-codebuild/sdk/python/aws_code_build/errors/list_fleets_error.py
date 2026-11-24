from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListFleetsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListFleetsError:
    def map(self, status_code: int, content: bytes) -> ListFleetsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_fleets_error_mapper: Final[ErrorMapper[ListFleetsErrorBody]] = _ListFleetsError()
