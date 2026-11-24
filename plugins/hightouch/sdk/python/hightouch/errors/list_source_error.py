from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListSourceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListSourceError:
    def map(self, status_code: int, content: bytes) -> ListSourceErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_source_error_mapper: Final[ErrorMapper[ListSourceErrorBody]] = _ListSourceError()
