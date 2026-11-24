from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_test_manager_projects_api import ErrorResponseUiPathTestManagerProjectsApi

ListProjects2ErrorBody: TypeAlias = ErrorResponseUiPathTestManagerProjectsApi | RawError


@dataclass(frozen=True, slots=True)
class _ListProjects2Error:
    def map(self, status_code: int, content: bytes) -> ListProjects2ErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[ErrorResponseUiPathTestManagerProjectsApi](content)
            case _:
                return RawError(status_code, content)


list_projects2_error_mapper: Final[ErrorMapper[ListProjects2ErrorBody]] = _ListProjects2Error()
