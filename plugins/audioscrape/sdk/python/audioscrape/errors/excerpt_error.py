from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ExcerptErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ExcerptError:
    def map(self, status_code: int, content: bytes) -> ExcerptErrorBody:
        match status_code:
            case 402 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


excerpt_error_mapper: Final[ErrorMapper[ExcerptErrorBody]] = _ExcerptError()
