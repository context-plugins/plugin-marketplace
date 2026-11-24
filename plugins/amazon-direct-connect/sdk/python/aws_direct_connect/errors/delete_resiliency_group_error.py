from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteResiliencyGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteResiliencyGroupError:
    def map(self, status_code: int, content: bytes) -> DeleteResiliencyGroupErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_resiliency_group_error_mapper: Final[ErrorMapper[DeleteResiliencyGroupErrorBody]] = _DeleteResiliencyGroupError()
