from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeTestCasesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeTestCasesError:
    def map(self, status_code: int, content: bytes) -> DescribeTestCasesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_test_cases_error_mapper: Final[ErrorMapper[DescribeTestCasesErrorBody]] = _DescribeTestCasesError()
