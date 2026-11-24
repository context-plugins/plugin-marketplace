from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

DeleteResourceClassErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _DeleteResourceClassError:
    def map(self, status_code: int, content: bytes) -> DeleteResourceClassErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


delete_resource_class_error_mapper: Final[ErrorMapper[DeleteResourceClassErrorBody]] = _DeleteResourceClassError()
