from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

ListAwsSavingsPlansErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _ListAwsSavingsPlansError:
    def map(self, status_code: int, content: bytes) -> ListAwsSavingsPlansErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500 | 503:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


list_aws_savings_plans_error_mapper: Final[ErrorMapper[ListAwsSavingsPlansErrorBody]] = _ListAwsSavingsPlansError()
