from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StopBuildErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StopBuildError:
    def map(self, status_code: int, content: bytes) -> StopBuildErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


stop_build_error_mapper: Final[ErrorMapper[StopBuildErrorBody]] = _StopBuildError()
