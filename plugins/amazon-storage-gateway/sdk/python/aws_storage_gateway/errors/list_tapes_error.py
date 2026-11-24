from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListTapesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListTapesError:
    def map(self, status_code: int, content: bytes) -> ListTapesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_tapes_error_mapper: Final[ErrorMapper[ListTapesErrorBody]] = _ListTapesError()
