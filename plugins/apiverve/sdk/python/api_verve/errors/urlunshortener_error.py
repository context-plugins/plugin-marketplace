from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UrlunshortenerErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UrlunshortenerError:
    def map(self, status_code: int, content: bytes) -> UrlunshortenerErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


urlunshortener_error_mapper: Final[ErrorMapper[UrlunshortenerErrorBody]] = _UrlunshortenerError()
