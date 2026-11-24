from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_upload_init400_error1 import ApiV1UploadInit400Error1
from ..models.api_v1_upload_init401_error1 import ApiV1UploadInit401Error1
from ..models.api_v1_upload_init403_error1 import ApiV1UploadInit403Error1
from ..models.api_v1_upload_init404_error1 import ApiV1UploadInit404Error1
from ..models.api_v1_upload_init429_error1 import ApiV1UploadInit429Error1
from ..models.api_v1_upload_init500_error1 import ApiV1UploadInit500Error1
from ..models.api_v1_upload_init502_error1 import ApiV1UploadInit502Error1
from ..models.api_v1_upload_init503_error1 import ApiV1UploadInit503Error1
from ..models.api_v1_upload_init504_error1 import ApiV1UploadInit504Error1

UploadInitLargeUploadErrorBody: TypeAlias = (
    ApiV1UploadInit400Error1
    | ApiV1UploadInit401Error1
    | ApiV1UploadInit403Error1
    | ApiV1UploadInit404Error1
    | ApiV1UploadInit429Error1
    | ApiV1UploadInit500Error1
    | ApiV1UploadInit502Error1
    | ApiV1UploadInit503Error1
    | ApiV1UploadInit504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadInitLargeUploadError:
    def map(self, status_code: int, content: bytes) -> UploadInitLargeUploadErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1UploadInit400Error1](content)
            case 401:
                return decode_json[ApiV1UploadInit401Error1](content)
            case 403:
                return decode_json[ApiV1UploadInit403Error1](content)
            case 404:
                return decode_json[ApiV1UploadInit404Error1](content)
            case 429:
                return decode_json[ApiV1UploadInit429Error1](content)
            case 500:
                return decode_json[ApiV1UploadInit500Error1](content)
            case 502:
                return decode_json[ApiV1UploadInit502Error1](content)
            case 503:
                return decode_json[ApiV1UploadInit503Error1](content)
            case 504:
                return decode_json[ApiV1UploadInit504Error1](content)
            case _:
                return RawError(status_code, content)


upload_init_large_upload_error_mapper: Final[
    ErrorMapper[UploadInitLargeUploadErrorBody]
] = _UploadInitLargeUploadError()
