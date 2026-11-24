from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeResourcePolicyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeResourcePolicyError:
    def map(self, status_code: int, content: bytes) -> DescribeResourcePolicyErrorBody:
        match status_code:
            case 400 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_resource_policy_error_mapper: Final[
    ErrorMapper[DescribeResourcePolicyErrorBody]
] = _DescribeResourcePolicyError()
