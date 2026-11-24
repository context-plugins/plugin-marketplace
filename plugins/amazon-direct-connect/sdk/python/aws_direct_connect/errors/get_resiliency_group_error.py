from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetResiliencyGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetResiliencyGroupError:
    def map(self, status_code: int, content: bytes) -> GetResiliencyGroupErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_resiliency_group_error_mapper: Final[ErrorMapper[GetResiliencyGroupErrorBody]] = _GetResiliencyGroupError()
