from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

MimetypelookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _MimetypelookupError:
    def map(self, status_code: int, content: bytes) -> MimetypelookupErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


mimetypelookup_error_mapper: Final[ErrorMapper[MimetypelookupErrorBody]] = _MimetypelookupError()
