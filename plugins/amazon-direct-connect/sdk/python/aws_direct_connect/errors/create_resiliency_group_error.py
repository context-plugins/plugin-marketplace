from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateResiliencyGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateResiliencyGroupError:
    def map(self, status_code: int, content: bytes) -> CreateResiliencyGroupErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_resiliency_group_error_mapper: Final[ErrorMapper[CreateResiliencyGroupErrorBody]] = _CreateResiliencyGroupError()
