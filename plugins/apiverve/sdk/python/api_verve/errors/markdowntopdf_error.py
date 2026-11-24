from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

MarkdowntopdfErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _MarkdowntopdfError:
    def map(self, status_code: int, content: bytes) -> MarkdowntopdfErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


markdowntopdf_error_mapper: Final[ErrorMapper[MarkdowntopdfErrorBody]] = _MarkdowntopdfError()
