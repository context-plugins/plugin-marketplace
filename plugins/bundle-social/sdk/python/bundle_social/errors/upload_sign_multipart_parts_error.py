from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_upload_multipart_sign400_error1 import ApiV1UploadMultipartSign400Error1
from ..models.api_v1_upload_multipart_sign401_error1 import ApiV1UploadMultipartSign401Error1
from ..models.api_v1_upload_multipart_sign403_error1 import ApiV1UploadMultipartSign403Error1
from ..models.api_v1_upload_multipart_sign404_error1 import ApiV1UploadMultipartSign404Error1
from ..models.api_v1_upload_multipart_sign429_error1 import ApiV1UploadMultipartSign429Error1
from ..models.api_v1_upload_multipart_sign500_error1 import ApiV1UploadMultipartSign500Error1
from ..models.api_v1_upload_multipart_sign502_error1 import ApiV1UploadMultipartSign502Error1
from ..models.api_v1_upload_multipart_sign503_error1 import ApiV1UploadMultipartSign503Error1
from ..models.api_v1_upload_multipart_sign504_error1 import ApiV1UploadMultipartSign504Error1

UploadSignMultipartPartsErrorBody: TypeAlias = (
    ApiV1UploadMultipartSign400Error1
    | ApiV1UploadMultipartSign401Error1
    | ApiV1UploadMultipartSign403Error1
    | ApiV1UploadMultipartSign404Error1
    | ApiV1UploadMultipartSign429Error1
    | ApiV1UploadMultipartSign500Error1
    | ApiV1UploadMultipartSign502Error1
    | ApiV1UploadMultipartSign503Error1
    | ApiV1UploadMultipartSign504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadSignMultipartPartsError:
    def map(self, status_code: int, content: bytes) -> UploadSignMultipartPartsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1UploadMultipartSign400Error1](content)
            case 401:
                return decode_json[ApiV1UploadMultipartSign401Error1](content)
            case 403:
                return decode_json[ApiV1UploadMultipartSign403Error1](content)
            case 404:
                return decode_json[ApiV1UploadMultipartSign404Error1](content)
            case 429:
                return decode_json[ApiV1UploadMultipartSign429Error1](content)
            case 500:
                return decode_json[ApiV1UploadMultipartSign500Error1](content)
            case 502:
                return decode_json[ApiV1UploadMultipartSign502Error1](content)
            case 503:
                return decode_json[ApiV1UploadMultipartSign503Error1](content)
            case 504:
                return decode_json[ApiV1UploadMultipartSign504Error1](content)
            case _:
                return RawError(status_code, content)


upload_sign_multipart_parts_error_mapper: Final[
    ErrorMapper[UploadSignMultipartPartsErrorBody]
] = _UploadSignMultipartPartsError()
