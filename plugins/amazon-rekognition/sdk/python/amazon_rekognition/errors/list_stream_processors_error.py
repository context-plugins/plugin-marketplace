from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListStreamProcessorsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListStreamProcessorsError:
    def map(self, status_code: int, content: bytes) -> ListStreamProcessorsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_stream_processors_error_mapper: Final[ErrorMapper[ListStreamProcessorsErrorBody]] = _ListStreamProcessorsError()
