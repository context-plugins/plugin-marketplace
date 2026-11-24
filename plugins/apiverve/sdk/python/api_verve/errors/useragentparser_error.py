from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UseragentparserErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UseragentparserError:
    def map(self, status_code: int, content: bytes) -> UseragentparserErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


useragentparser_error_mapper: Final[ErrorMapper[UseragentparserErrorBody]] = _UseragentparserError()
