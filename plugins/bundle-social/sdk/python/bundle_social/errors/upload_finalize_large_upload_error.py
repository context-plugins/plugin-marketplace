from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_upload_finalize400_error1 import ApiV1UploadFinalize400Error1
from ..models.api_v1_upload_finalize401_error1 import ApiV1UploadFinalize401Error1
from ..models.api_v1_upload_finalize403_error1 import ApiV1UploadFinalize403Error1
from ..models.api_v1_upload_finalize404_error1 import ApiV1UploadFinalize404Error1
from ..models.api_v1_upload_finalize429_error1 import ApiV1UploadFinalize429Error1
from ..models.api_v1_upload_finalize500_error1 import ApiV1UploadFinalize500Error1
from ..models.api_v1_upload_finalize502_error1 import ApiV1UploadFinalize502Error1
from ..models.api_v1_upload_finalize503_error1 import ApiV1UploadFinalize503Error1
from ..models.api_v1_upload_finalize504_error1 import ApiV1UploadFinalize504Error1

UploadFinalizeLargeUploadErrorBody: TypeAlias = (
    ApiV1UploadFinalize400Error1
    | ApiV1UploadFinalize401Error1
    | ApiV1UploadFinalize403Error1
    | ApiV1UploadFinalize404Error1
    | ApiV1UploadFinalize429Error1
    | ApiV1UploadFinalize500Error1
    | ApiV1UploadFinalize502Error1
    | ApiV1UploadFinalize503Error1
    | ApiV1UploadFinalize504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _UploadFinalizeLargeUploadError:
    def map(self, status_code: int, content: bytes) -> UploadFinalizeLargeUploadErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1UploadFinalize400Error1](content)
            case 401:
                return decode_json[ApiV1UploadFinalize401Error1](content)
            case 403:
                return decode_json[ApiV1UploadFinalize403Error1](content)
            case 404:
                return decode_json[ApiV1UploadFinalize404Error1](content)
            case 429:
                return decode_json[ApiV1UploadFinalize429Error1](content)
            case 500:
                return decode_json[ApiV1UploadFinalize500Error1](content)
            case 502:
                return decode_json[ApiV1UploadFinalize502Error1](content)
            case 503:
                return decode_json[ApiV1UploadFinalize503Error1](content)
            case 504:
                return decode_json[ApiV1UploadFinalize504Error1](content)
            case _:
                return RawError(status_code, content)


upload_finalize_large_upload_error_mapper: Final[
    ErrorMapper[UploadFinalizeLargeUploadErrorBody]
] = _UploadFinalizeLargeUploadError()
