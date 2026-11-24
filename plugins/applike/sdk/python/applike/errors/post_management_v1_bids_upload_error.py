from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.upload_bids_invalid_bid_response import UploadBidsInvalidBidResponse

PostManagementV1BidsUploadErrorBody: TypeAlias = UploadBidsInvalidBidResponse | ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostManagementV1BidsUploadError:
    def map(self, status_code: int, content: bytes) -> PostManagementV1BidsUploadErrorBody:
        match status_code:
            case 400:
                return decode_json[UploadBidsInvalidBidResponse](content)
            case 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_management_v1_bids_upload_error_mapper: Final[
    ErrorMapper[PostManagementV1BidsUploadErrorBody]
] = _PostManagementV1BidsUploadError()
