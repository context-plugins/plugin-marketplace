from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetBuildErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetBuildError:
    def map(self, status_code: int, content: bytes) -> GetBuildErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_build_error_mapper: Final[ErrorMapper[GetBuildErrorBody]] = _GetBuildError()
