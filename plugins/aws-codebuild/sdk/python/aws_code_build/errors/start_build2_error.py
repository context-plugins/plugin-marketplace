from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartBuild2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartBuild2Error:
    def map(self, status_code: int, content: bytes) -> StartBuild2ErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_build2_error_mapper: Final[ErrorMapper[StartBuild2ErrorBody]] = _StartBuild2Error()
