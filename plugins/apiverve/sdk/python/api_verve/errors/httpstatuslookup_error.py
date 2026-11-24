from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

HttpstatuslookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _HttpstatuslookupError:
    def map(self, status_code: int, content: bytes) -> HttpstatuslookupErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


httpstatuslookup_error_mapper: Final[ErrorMapper[HttpstatuslookupErrorBody]] = _HttpstatuslookupError()
