from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

VerifyComplianceReportErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _VerifyComplianceReportError:
    def map(self, status_code: int, content: bytes) -> VerifyComplianceReportErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


verify_compliance_report_error_mapper: Final[
    ErrorMapper[VerifyComplianceReportErrorBody]
] = _VerifyComplianceReportError()
