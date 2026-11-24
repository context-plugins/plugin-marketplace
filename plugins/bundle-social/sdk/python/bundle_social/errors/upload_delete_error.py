from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_upload400_error1 import ApiV1Upload400Error1
from ..models.api_v1_upload401_error1 import ApiV1Upload401Error1
from ..models.api_v1_upload403_error1 import ApiV1Upload403Error1
from ..models.api_v1_upload404_error1 import ApiV1Upload404Error1
from ..models.api_v1_upload429_error1 import ApiV1Upload429Error1
from ..models.api_v1_upload500_error1 import ApiV1Upload500Error1
from ..models.api_v1_upload502_error1 import ApiV1Upload502Error1
from ..models.api_v1_upload503_error1 import ApiV1Upload503Error1
from ..models.api_v1_upload504_error1 import ApiV1Upload504Error1

UploadDeleteErrorBody: TypeAlias = (
    ApiV1Upload400Error1
    | ApiV1Upload401Error1
    | ApiV1Upload403Error1
    | ApiV1Upload404Error1
    | ApiV1Upload429Error1
    | ApiV1Upload500Error1
    | ApiV1Upload502Error1
    | ApiV1Upload503Error1
    | ApiV1Upload504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadDeleteError:
    def map(self, status_code: int, content: bytes) -> UploadDeleteErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1Upload400Error1](content)
            case 401:
                return decode_json[ApiV1Upload401Error1](content)
            case 403:
                return decode_json[ApiV1Upload403Error1](content)
            case 404:
                return decode_json[ApiV1Upload404Error1](content)
            case 429:
                return decode_json[ApiV1Upload429Error1](content)
            case 500:
                return decode_json[ApiV1Upload500Error1](content)
            case 502:
                return decode_json[ApiV1Upload502Error1](content)
            case 503:
                return decode_json[ApiV1Upload503Error1](content)
            case 504:
                return decode_json[ApiV1Upload504Error1](content)
            case _:
                return RawError(status_code, content)


upload_delete_error_mapper: Final[ErrorMapper[UploadDeleteErrorBody]] = _UploadDeleteError()
