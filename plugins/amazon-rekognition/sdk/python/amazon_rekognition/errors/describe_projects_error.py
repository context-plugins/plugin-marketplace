from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeProjectsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeProjectsError:
    def map(self, status_code: int, content: bytes) -> DescribeProjectsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_projects_error_mapper: Final[ErrorMapper[DescribeProjectsErrorBody]] = _DescribeProjectsError()
