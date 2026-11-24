from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_upload_multipart_abort400_error1 import ApiV1UploadMultipartAbort400Error1
from ..models.api_v1_upload_multipart_abort401_error1 import ApiV1UploadMultipartAbort401Error1
from ..models.api_v1_upload_multipart_abort403_error1 import ApiV1UploadMultipartAbort403Error1
from ..models.api_v1_upload_multipart_abort404_error1 import ApiV1UploadMultipartAbort404Error1
from ..models.api_v1_upload_multipart_abort429_error1 import ApiV1UploadMultipartAbort429Error1
from ..models.api_v1_upload_multipart_abort500_error1 import ApiV1UploadMultipartAbort500Error1
from ..models.api_v1_upload_multipart_abort502_error1 import ApiV1UploadMultipartAbort502Error1
from ..models.api_v1_upload_multipart_abort503_error1 import ApiV1UploadMultipartAbort503Error1
from ..models.api_v1_upload_multipart_abort504_error1 import ApiV1UploadMultipartAbort504Error1

UploadAbortMultipartUploadErrorBody: TypeAlias = (
    ApiV1UploadMultipartAbort400Error1
    | ApiV1UploadMultipartAbort401Error1
    | ApiV1UploadMultipartAbort403Error1
    | ApiV1UploadMultipartAbort404Error1
    | ApiV1UploadMultipartAbort429Error1
    | ApiV1UploadMultipartAbort500Error1
    | ApiV1UploadMultipartAbort502Error1
    | ApiV1UploadMultipartAbort503Error1
    | ApiV1UploadMultipartAbort504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadAbortMultipartUploadError:
    def map(self, status_code: int, content: bytes) -> UploadAbortMultipartUploadErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1UploadMultipartAbort400Error1](content)
            case 401:
                return decode_json[ApiV1UploadMultipartAbort401Error1](content)
            case 403:
                return decode_json[ApiV1UploadMultipartAbort403Error1](content)
            case 404:
                return decode_json[ApiV1UploadMultipartAbort404Error1](content)
            case 429:
                return decode_json[ApiV1UploadMultipartAbort429Error1](content)
            case 500:
                return decode_json[ApiV1UploadMultipartAbort500Error1](content)
            case 502:
                return decode_json[ApiV1UploadMultipartAbort502Error1](content)
            case 503:
                return decode_json[ApiV1UploadMultipartAbort503Error1](content)
            case 504:
                return decode_json[ApiV1UploadMultipartAbort504Error1](content)
            case _:
                return RawError(status_code, content)


upload_abort_multipart_upload_error_mapper: Final[
    ErrorMapper[UploadAbortMultipartUploadErrorBody]
] = _UploadAbortMultipartUploadError()
