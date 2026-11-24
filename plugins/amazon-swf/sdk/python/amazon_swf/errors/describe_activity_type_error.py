from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeActivityTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeActivityTypeError:
    def map(self, status_code: int, content: bytes) -> DescribeActivityTypeErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_activity_type_error_mapper: Final[ErrorMapper[DescribeActivityTypeErrorBody]] = _DescribeActivityTypeError()
