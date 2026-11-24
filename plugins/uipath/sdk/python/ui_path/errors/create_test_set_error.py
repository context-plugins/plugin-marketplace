from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_test_manager_projects_api import ErrorResponseUiPathTestManagerProjectsApi

CreateTestSetErrorBody: TypeAlias = ErrorResponseUiPathTestManagerProjectsApi | RawError


@dataclass(frozen=True, slots=True)
class _CreateTestSetError:
    def map(self, status_code: int, content: bytes) -> CreateTestSetErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[ErrorResponseUiPathTestManagerProjectsApi](content)
            case _:
                return RawError(status_code, content)


create_test_set_error_mapper: Final[ErrorMapper[CreateTestSetErrorBody]] = _CreateTestSetError()
