from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_upload_from_url400_error1 import ApiV1UploadFromUrl400Error1
from ..models.api_v1_upload_from_url401_error1 import ApiV1UploadFromUrl401Error1
from ..models.api_v1_upload_from_url403_error1 import ApiV1UploadFromUrl403Error1
from ..models.api_v1_upload_from_url404_error1 import ApiV1UploadFromUrl404Error1
from ..models.api_v1_upload_from_url429_error1 import ApiV1UploadFromUrl429Error1
from ..models.api_v1_upload_from_url500_error1 import ApiV1UploadFromUrl500Error1
from ..models.api_v1_upload_from_url502_error1 import ApiV1UploadFromUrl502Error1
from ..models.api_v1_upload_from_url503_error1 import ApiV1UploadFromUrl503Error1
from ..models.api_v1_upload_from_url504_error1 import ApiV1UploadFromUrl504Error1

UploadCreateFromUrlErrorBody: TypeAlias = (
    ApiV1UploadFromUrl400Error1
    | ApiV1UploadFromUrl401Error1
    | ApiV1UploadFromUrl403Error1
    | ApiV1UploadFromUrl404Error1
    | ApiV1UploadFromUrl429Error1
    | ApiV1UploadFromUrl500Error1
    | ApiV1UploadFromUrl502Error1
    | ApiV1UploadFromUrl503Error1
    | ApiV1UploadFromUrl504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadCreateFromUrlError:
    def map(self, status_code: int, content: bytes) -> UploadCreateFromUrlErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1UploadFromUrl400Error1](content)
            case 401:
                return decode_json[ApiV1UploadFromUrl401Error1](content)
            case 403:
                return decode_json[ApiV1UploadFromUrl403Error1](content)
            case 404:
                return decode_json[ApiV1UploadFromUrl404Error1](content)
            case 429:
                return decode_json[ApiV1UploadFromUrl429Error1](content)
            case 500:
                return decode_json[ApiV1UploadFromUrl500Error1](content)
            case 502:
                return decode_json[ApiV1UploadFromUrl502Error1](content)
            case 503:
                return decode_json[ApiV1UploadFromUrl503Error1](content)
            case 504:
                return decode_json[ApiV1UploadFromUrl504Error1](content)
            case _:
                return RawError(status_code, content)


upload_create_from_url_error_mapper: Final[ErrorMapper[UploadCreateFromUrlErrorBody]] = _UploadCreateFromUrlError()
