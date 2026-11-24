from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PutResourcePolicyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PutResourcePolicyError:
    def map(self, status_code: int, content: bytes) -> PutResourcePolicyErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


put_resource_policy_error_mapper: Final[ErrorMapper[PutResourcePolicyErrorBody]] = _PutResourcePolicyError()
