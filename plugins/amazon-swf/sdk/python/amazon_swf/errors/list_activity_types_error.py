from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListActivityTypesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListActivityTypesError:
    def map(self, status_code: int, content: bytes) -> ListActivityTypesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_activity_types_error_mapper: Final[ErrorMapper[ListActivityTypesErrorBody]] = _ListActivityTypesError()
