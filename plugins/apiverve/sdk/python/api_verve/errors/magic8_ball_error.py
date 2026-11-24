from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

Magic8BallErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _Magic8BallError:
    def map(self, status_code: int, content: bytes) -> Magic8BallErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


magic8_ball_error_mapper: Final[ErrorMapper[Magic8BallErrorBody]] = _Magic8BallError()
