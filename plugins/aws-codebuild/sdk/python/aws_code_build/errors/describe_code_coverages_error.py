from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeCodeCoveragesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeCodeCoveragesError:
    def map(self, status_code: int, content: bytes) -> DescribeCodeCoveragesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_code_coverages_error_mapper: Final[ErrorMapper[DescribeCodeCoveragesErrorBody]] = _DescribeCodeCoveragesError()
