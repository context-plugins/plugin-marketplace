from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

RetryBuildErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _RetryBuildError:
    def map(self, status_code: int, content: bytes) -> RetryBuildErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


retry_build_error_mapper: Final[ErrorMapper[RetryBuildErrorBody]] = _RetryBuildError()
