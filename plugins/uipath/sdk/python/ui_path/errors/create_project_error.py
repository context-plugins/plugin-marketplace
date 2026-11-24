from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_test_manager_projects_api import ErrorResponseUiPathTestManagerProjectsApi

CreateProjectErrorBody: TypeAlias = ErrorResponseUiPathTestManagerProjectsApi | RawError


@dataclass(frozen=True, slots=True)
class _CreateProjectError:
    def map(self, status_code: int, content: bytes) -> CreateProjectErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponseUiPathTestManagerProjectsApi](content)
            case _:
                return RawError(status_code, content)


create_project_error_mapper: Final[ErrorMapper[CreateProjectErrorBody]] = _CreateProjectError()
