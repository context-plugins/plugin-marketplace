from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteResourcePolicyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteResourcePolicyError:
    def map(self, status_code: int, content: bytes) -> DeleteResourcePolicyErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_resource_policy_error_mapper: Final[ErrorMapper[DeleteResourcePolicyErrorBody]] = _DeleteResourcePolicyError()
