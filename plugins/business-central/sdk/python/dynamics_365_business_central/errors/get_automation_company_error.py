from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetAutomationCompanyErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetAutomationCompanyError:
    def map(self, status_code: int, content: bytes) -> GetAutomationCompanyErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_automation_company_error_mapper: Final[ErrorMapper[GetAutomationCompanyErrorBody]] = _GetAutomationCompanyError()
