from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeRouterConfigurationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeRouterConfigurationError:
    def map(self, status_code: int, content: bytes) -> DescribeRouterConfigurationErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_router_configuration_error_mapper: Final[
    ErrorMapper[DescribeRouterConfigurationErrorBody]
] = _DescribeRouterConfigurationError()
