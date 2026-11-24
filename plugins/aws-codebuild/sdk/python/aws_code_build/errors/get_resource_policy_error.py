from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetResourcePolicyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetResourcePolicyError:
    def map(self, status_code: int, content: bytes) -> GetResourcePolicyErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_resource_policy_error_mapper: Final[ErrorMapper[GetResourcePolicyErrorBody]] = _GetResourcePolicyError()
