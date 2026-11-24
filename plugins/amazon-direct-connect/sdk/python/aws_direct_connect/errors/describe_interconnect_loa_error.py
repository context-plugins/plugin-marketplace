from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeInterconnectLoaErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeInterconnectLoaError:
    def map(self, status_code: int, content: bytes) -> DescribeInterconnectLoaErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_interconnect_loa_error_mapper: Final[
    ErrorMapper[DescribeInterconnectLoaErrorBody]
] = _DescribeInterconnectLoaError()
