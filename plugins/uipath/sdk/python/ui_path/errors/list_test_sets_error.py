from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response_ui_path_test_manager_projects_api import ErrorResponseUiPathTestManagerProjectsApi

ListTestSetsErrorBody: TypeAlias = ErrorResponseUiPathTestManagerProjectsApi | RawError


@dataclass(frozen=True, slots=True)
class _ListTestSetsError:
    def map(self, status_code: int, content: bytes) -> ListTestSetsErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponseUiPathTestManagerProjectsApi](content)
            case _:
                return RawError(status_code, content)


list_test_sets_error_mapper: Final[ErrorMapper[ListTestSetsErrorBody]] = _ListTestSetsError()
