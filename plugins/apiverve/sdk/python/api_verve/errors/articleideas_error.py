from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ArticleideasErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ArticleideasError:
    def map(self, status_code: int, content: bytes) -> ArticleideasErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


articleideas_error_mapper: Final[ErrorMapper[ArticleideasErrorBody]] = _ArticleideasError()
