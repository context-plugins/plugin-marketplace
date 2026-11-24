from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeWorkflowTypeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeWorkflowTypeError:
    def map(self, status_code: int, content: bytes) -> DescribeWorkflowTypeErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_workflow_type_error_mapper: Final[ErrorMapper[DescribeWorkflowTypeErrorBody]] = _DescribeWorkflowTypeError()
