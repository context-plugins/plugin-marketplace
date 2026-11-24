from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeNetworkAclsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeNetworkAclsError:
    def map(self, status_code: int, content: bytes) -> DescribeNetworkAclsErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_network_acls_error_mapper: Final[ErrorMapper[DescribeNetworkAclsErrorBody]] = _DescribeNetworkAclsError()
