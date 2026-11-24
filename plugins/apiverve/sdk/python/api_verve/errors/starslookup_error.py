from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StarslookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StarslookupError:
    def map(self, status_code: int, content: bytes) -> StarslookupErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


starslookup_error_mapper: Final[ErrorMapper[StarslookupErrorBody]] = _StarslookupError()
