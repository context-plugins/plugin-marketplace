from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeMapRunErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeMapRunError:
    def map(self, status_code: int, content: bytes) -> DescribeMapRunErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_map_run_error_mapper: Final[ErrorMapper[DescribeMapRunErrorBody]] = _DescribeMapRunError()
