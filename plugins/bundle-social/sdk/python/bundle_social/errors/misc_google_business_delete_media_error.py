from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_google_business_media400_error1 import ApiV1MiscGoogleBusinessMedia400Error1
from ..models.api_v1_misc_google_business_media401_error1 import ApiV1MiscGoogleBusinessMedia401Error1
from ..models.api_v1_misc_google_business_media403_error1 import ApiV1MiscGoogleBusinessMedia403Error1
from ..models.api_v1_misc_google_business_media404_error1 import ApiV1MiscGoogleBusinessMedia404Error1
from ..models.api_v1_misc_google_business_media429_error1 import ApiV1MiscGoogleBusinessMedia429Error1
from ..models.api_v1_misc_google_business_media500_error1 import ApiV1MiscGoogleBusinessMedia500Error1
from ..models.api_v1_misc_google_business_media502_error1 import ApiV1MiscGoogleBusinessMedia502Error1
from ..models.api_v1_misc_google_business_media503_error1 import ApiV1MiscGoogleBusinessMedia503Error1
from ..models.api_v1_misc_google_business_media504_error1 import ApiV1MiscGoogleBusinessMedia504Error1

MiscGoogleBusinessDeleteMediaErrorBody: TypeAlias = (
    ApiV1MiscGoogleBusinessMedia400Error1
    | ApiV1MiscGoogleBusinessMedia401Error1
    | ApiV1MiscGoogleBusinessMedia403Error1
    | ApiV1MiscGoogleBusinessMedia404Error1
    | ApiV1MiscGoogleBusinessMedia429Error1
    | ApiV1MiscGoogleBusinessMedia500Error1
    | ApiV1MiscGoogleBusinessMedia502Error1
    | ApiV1MiscGoogleBusinessMedia503Error1
    | ApiV1MiscGoogleBusinessMedia504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscGoogleBusinessDeleteMediaError:
    def map(self, status_code: int, content: bytes) -> MiscGoogleBusinessDeleteMediaErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscGoogleBusinessMedia400Error1](content)
            case 401:
                return decode_json[ApiV1MiscGoogleBusinessMedia401Error1](content)
            case 403:
                return decode_json[ApiV1MiscGoogleBusinessMedia403Error1](content)
            case 404:
                return decode_json[ApiV1MiscGoogleBusinessMedia404Error1](content)
            case 429:
                return decode_json[ApiV1MiscGoogleBusinessMedia429Error1](content)
            case 500:
                return decode_json[ApiV1MiscGoogleBusinessMedia500Error1](content)
            case 502:
                return decode_json[ApiV1MiscGoogleBusinessMedia502Error1](content)
            case 503:
                return decode_json[ApiV1MiscGoogleBusinessMedia503Error1](content)
            case 504:
                return decode_json[ApiV1MiscGoogleBusinessMedia504Error1](content)
            case _:
                return RawError(status_code, content)


misc_google_business_delete_media_error_mapper: Final[
    ErrorMapper[MiscGoogleBusinessDeleteMediaErrorBody]
] = _MiscGoogleBusinessDeleteMediaError()
