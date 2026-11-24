from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartBuildErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartBuildError:
    def map(self, status_code: int, content: bytes) -> StartBuildErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_build_error_mapper: Final[ErrorMapper[StartBuildErrorBody]] = _StartBuildError()
