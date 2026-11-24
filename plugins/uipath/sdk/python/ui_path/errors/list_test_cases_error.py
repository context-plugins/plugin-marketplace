from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_test_manager_projects_api import ErrorResponseUiPathTestManagerProjectsApi

ListTestCasesErrorBody: TypeAlias = ErrorResponseUiPathTestManagerProjectsApi | RawError


@dataclass(frozen=True, slots=True)
class _ListTestCasesError:
    def map(self, status_code: int, content: bytes) -> ListTestCasesErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponseUiPathTestManagerProjectsApi](content)
            case _:
                return RawError(status_code, content)


list_test_cases_error_mapper: Final[ErrorMapper[ListTestCasesErrorBody]] = _ListTestCasesError()
