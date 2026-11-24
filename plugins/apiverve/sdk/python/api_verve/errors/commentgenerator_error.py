from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CommentgeneratorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CommentgeneratorError:
    def map(self, status_code: int, content: bytes) -> CommentgeneratorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


commentgenerator_error_mapper: Final[ErrorMapper[CommentgeneratorErrorBody]] = _CommentgeneratorError()
