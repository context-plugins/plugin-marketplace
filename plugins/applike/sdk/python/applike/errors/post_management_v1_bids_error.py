from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostManagementV1BidsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostManagementV1BidsError:
    def map(self, status_code: int, content: bytes) -> PostManagementV1BidsErrorBody:
        match status_code:
            case 400 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_management_v1_bids_error_mapper: Final[ErrorMapper[PostManagementV1BidsErrorBody]] = _PostManagementV1BidsError()
