from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CancelBuildErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CancelBuildError:
    def map(self, status_code: int, content: bytes) -> CancelBuildErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


cancel_build_error_mapper: Final[ErrorMapper[CancelBuildErrorBody]] = _CancelBuildError()
