from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeExplainabilityErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeExplainabilityError:
    def map(self, status_code: int, content: bytes) -> DescribeExplainabilityErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_explainability_error_mapper: Final[
    ErrorMapper[DescribeExplainabilityErrorBody]
] = _DescribeExplainabilityError()
