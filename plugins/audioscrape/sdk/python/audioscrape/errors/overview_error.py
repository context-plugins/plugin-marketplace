from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

OverviewErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _OverviewError:
    def map(self, status_code: int, content: bytes) -> OverviewErrorBody:
        match status_code:
            case 402 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


overview_error_mapper: Final[ErrorMapper[OverviewErrorBody]] = _OverviewError()
