from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeWhatIfAnalysisErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeWhatIfAnalysisError:
    def map(self, status_code: int, content: bytes) -> DescribeWhatIfAnalysisErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_what_if_analysis_error_mapper: Final[
    ErrorMapper[DescribeWhatIfAnalysisErrorBody]
] = _DescribeWhatIfAnalysisError()
