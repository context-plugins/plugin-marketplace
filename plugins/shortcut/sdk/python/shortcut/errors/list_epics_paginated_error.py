from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListEpicsPaginatedErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListEpicsPaginatedError:
    def map(self, status_code: int, content: bytes) -> ListEpicsPaginatedErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_epics_paginated_error_mapper: Final[ErrorMapper[ListEpicsPaginatedErrorBody]] = _ListEpicsPaginatedError()
