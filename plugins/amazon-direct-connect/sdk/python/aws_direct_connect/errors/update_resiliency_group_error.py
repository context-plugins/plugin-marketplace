from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateResiliencyGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateResiliencyGroupError:
    def map(self, status_code: int, content: bytes) -> UpdateResiliencyGroupErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_resiliency_group_error_mapper: Final[ErrorMapper[UpdateResiliencyGroupErrorBody]] = _UpdateResiliencyGroupError()
