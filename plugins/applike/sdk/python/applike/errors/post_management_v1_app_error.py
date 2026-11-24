from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostManagementV1AppErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostManagementV1AppError:
    def map(self, status_code: int, content: bytes) -> PostManagementV1AppErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case 401 | 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_management_v1_app_error_mapper: Final[ErrorMapper[PostManagementV1AppErrorBody]] = _PostManagementV1AppError()
