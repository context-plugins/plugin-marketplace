from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeAutoPredictorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeAutoPredictorError:
    def map(self, status_code: int, content: bytes) -> DescribeAutoPredictorErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_auto_predictor_error_mapper: Final[ErrorMapper[DescribeAutoPredictorErrorBody]] = _DescribeAutoPredictorError()
