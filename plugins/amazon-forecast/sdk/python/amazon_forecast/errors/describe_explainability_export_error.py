from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeExplainabilityExportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeExplainabilityExportError:
    def map(self, status_code: int, content: bytes) -> DescribeExplainabilityExportErrorBody:
        match status_code:
            case 400 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_explainability_export_error_mapper: Final[
    ErrorMapper[DescribeExplainabilityExportErrorBody]
] = _DescribeExplainabilityExportError()
