from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PutProjectPolicyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PutProjectPolicyError:
    def map(self, status_code: int, content: bytes) -> PutProjectPolicyErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


put_project_policy_error_mapper: Final[ErrorMapper[PutProjectPolicyErrorBody]] = _PutProjectPolicyError()
