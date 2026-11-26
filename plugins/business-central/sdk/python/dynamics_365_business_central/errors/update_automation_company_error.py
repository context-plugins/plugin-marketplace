from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

UpdateAutomationCompanyErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _UpdateAutomationCompanyError:
    def map(self, status_code: int, content: bytes) -> UpdateAutomationCompanyErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


update_automation_company_error_mapper: Final[
    ErrorMapper[UpdateAutomationCompanyErrorBody]
] = _UpdateAutomationCompanyError()
