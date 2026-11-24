from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteProjectPolicyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteProjectPolicyError:
    def map(self, status_code: int, content: bytes) -> DeleteProjectPolicyErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_project_policy_error_mapper: Final[ErrorMapper[DeleteProjectPolicyErrorBody]] = _DeleteProjectPolicyError()
