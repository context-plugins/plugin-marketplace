from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_upload_multipart_init400_error1 import ApiV1UploadMultipartInit400Error1
from ..models.api_v1_upload_multipart_init401_error1 import ApiV1UploadMultipartInit401Error1
from ..models.api_v1_upload_multipart_init403_error1 import ApiV1UploadMultipartInit403Error1
from ..models.api_v1_upload_multipart_init404_error1 import ApiV1UploadMultipartInit404Error1
from ..models.api_v1_upload_multipart_init429_error1 import ApiV1UploadMultipartInit429Error1
from ..models.api_v1_upload_multipart_init500_error1 import ApiV1UploadMultipartInit500Error1
from ..models.api_v1_upload_multipart_init502_error1 import ApiV1UploadMultipartInit502Error1
from ..models.api_v1_upload_multipart_init503_error1 import ApiV1UploadMultipartInit503Error1
from ..models.api_v1_upload_multipart_init504_error1 import ApiV1UploadMultipartInit504Error1

UploadInitMultipartUploadErrorBody: TypeAlias = (
    ApiV1UploadMultipartInit400Error1
    | ApiV1UploadMultipartInit401Error1
    | ApiV1UploadMultipartInit403Error1
    | ApiV1UploadMultipartInit404Error1
    | ApiV1UploadMultipartInit429Error1
    | ApiV1UploadMultipartInit500Error1
    | ApiV1UploadMultipartInit502Error1
    | ApiV1UploadMultipartInit503Error1
    | ApiV1UploadMultipartInit504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadInitMultipartUploadError:
    def map(self, status_code: int, content: bytes) -> UploadInitMultipartUploadErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1UploadMultipartInit400Error1](content)
            case 401:
                return decode_json[ApiV1UploadMultipartInit401Error1](content)
            case 403:
                return decode_json[ApiV1UploadMultipartInit403Error1](content)
            case 404:
                return decode_json[ApiV1UploadMultipartInit404Error1](content)
            case 429:
                return decode_json[ApiV1UploadMultipartInit429Error1](content)
            case 500:
                return decode_json[ApiV1UploadMultipartInit500Error1](content)
            case 502:
                return decode_json[ApiV1UploadMultipartInit502Error1](content)
            case 503:
                return decode_json[ApiV1UploadMultipartInit503Error1](content)
            case 504:
                return decode_json[ApiV1UploadMultipartInit504Error1](content)
            case _:
                return RawError(status_code, content)


upload_init_multipart_upload_error_mapper: Final[
    ErrorMapper[UploadInitMultipartUploadErrorBody]
] = _UploadInitMultipartUploadError()
