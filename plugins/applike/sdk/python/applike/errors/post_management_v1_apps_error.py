from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostManagementV1AppsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostManagementV1AppsError:
    def map(self, status_code: int, content: bytes) -> PostManagementV1AppsErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_management_v1_apps_error_mapper: Final[ErrorMapper[PostManagementV1AppsErrorBody]] = _PostManagementV1AppsError()
