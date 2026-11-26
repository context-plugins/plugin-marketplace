from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostManagementV1PartnersErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostManagementV1PartnersError:
    def map(self, status_code: int, content: bytes) -> PostManagementV1PartnersErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_management_v1_partners_error_mapper: Final[
    ErrorMapper[PostManagementV1PartnersErrorBody]
] = _PostManagementV1PartnersError()
