from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UrltomarkdownErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UrltomarkdownError:
    def map(self, status_code: int, content: bytes) -> UrltomarkdownErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


urltomarkdown_error_mapper: Final[ErrorMapper[UrltomarkdownErrorBody]] = _UrltomarkdownError()
