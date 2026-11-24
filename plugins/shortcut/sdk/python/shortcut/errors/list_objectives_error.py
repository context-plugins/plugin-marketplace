from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListObjectivesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListObjectivesError:
    def map(self, status_code: int, content: bytes) -> ListObjectivesErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_objectives_error_mapper: Final[ErrorMapper[ListObjectivesErrorBody]] = _ListObjectivesError()
