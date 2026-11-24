from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_upload_multipart_complete400_error1 import ApiV1UploadMultipartComplete400Error1
from ..models.api_v1_upload_multipart_complete401_error1 import ApiV1UploadMultipartComplete401Error1
from ..models.api_v1_upload_multipart_complete403_error1 import ApiV1UploadMultipartComplete403Error1
from ..models.api_v1_upload_multipart_complete404_error1 import ApiV1UploadMultipartComplete404Error1
from ..models.api_v1_upload_multipart_complete429_error1 import ApiV1UploadMultipartComplete429Error1
from ..models.api_v1_upload_multipart_complete500_error1 import ApiV1UploadMultipartComplete500Error1
from ..models.api_v1_upload_multipart_complete502_error1 import ApiV1UploadMultipartComplete502Error1
from ..models.api_v1_upload_multipart_complete503_error1 import ApiV1UploadMultipartComplete503Error1
from ..models.api_v1_upload_multipart_complete504_error1 import ApiV1UploadMultipartComplete504Error1

UploadCompleteMultipartUploadErrorBody: TypeAlias = (
    ApiV1UploadMultipartComplete400Error1
    | ApiV1UploadMultipartComplete401Error1
    | ApiV1UploadMultipartComplete403Error1
    | ApiV1UploadMultipartComplete404Error1
    | ApiV1UploadMultipartComplete429Error1
    | ApiV1UploadMultipartComplete500Error1
    | ApiV1UploadMultipartComplete502Error1
    | ApiV1UploadMultipartComplete503Error1
    | ApiV1UploadMultipartComplete504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadCompleteMultipartUploadError:
    def map(self, status_code: int, content: bytes) -> UploadCompleteMultipartUploadErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1UploadMultipartComplete400Error1](content)
            case 401:
                return decode_json[ApiV1UploadMultipartComplete401Error1](content)
            case 403:
                return decode_json[ApiV1UploadMultipartComplete403Error1](content)
            case 404:
                return decode_json[ApiV1UploadMultipartComplete404Error1](content)
            case 429:
                return decode_json[ApiV1UploadMultipartComplete429Error1](content)
            case 500:
                return decode_json[ApiV1UploadMultipartComplete500Error1](content)
            case 502:
                return decode_json[ApiV1UploadMultipartComplete502Error1](content)
            case 503:
                return decode_json[ApiV1UploadMultipartComplete503Error1](content)
            case 504:
                return decode_json[ApiV1UploadMultipartComplete504Error1](content)
            case _:
                return RawError(status_code, content)


upload_complete_multipart_upload_error_mapper: Final[
    ErrorMapper[UploadCompleteMultipartUploadErrorBody]
] = _UploadCompleteMultipartUploadError()
