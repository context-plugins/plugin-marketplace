from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_facebook_pages400_error1 import ApiV1MiscFacebookPages400Error1
from ..models.api_v1_misc_facebook_pages401_error1 import ApiV1MiscFacebookPages401Error1
from ..models.api_v1_misc_facebook_pages403_error1 import ApiV1MiscFacebookPages403Error1
from ..models.api_v1_misc_facebook_pages404_error1 import ApiV1MiscFacebookPages404Error1
from ..models.api_v1_misc_facebook_pages429_error1 import ApiV1MiscFacebookPages429Error1
from ..models.api_v1_misc_facebook_pages500_error1 import ApiV1MiscFacebookPages500Error1
from ..models.api_v1_misc_facebook_pages502_error1 import ApiV1MiscFacebookPages502Error1
from ..models.api_v1_misc_facebook_pages503_error1 import ApiV1MiscFacebookPages503Error1
from ..models.api_v1_misc_facebook_pages504_error1 import ApiV1MiscFacebookPages504Error1

MiscFacebookSearchPagesErrorBody: TypeAlias = (
    ApiV1MiscFacebookPages400Error1
    | ApiV1MiscFacebookPages401Error1
    | ApiV1MiscFacebookPages403Error1
    | ApiV1MiscFacebookPages404Error1
    | ApiV1MiscFacebookPages429Error1
    | ApiV1MiscFacebookPages500Error1
    | ApiV1MiscFacebookPages502Error1
    | ApiV1MiscFacebookPages503Error1
    | ApiV1MiscFacebookPages504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscFacebookSearchPagesError:
    def map(self, status_code: int, content: bytes) -> MiscFacebookSearchPagesErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscFacebookPages400Error1](content)
            case 401:
                return decode_json[ApiV1MiscFacebookPages401Error1](content)
            case 403:
                return decode_json[ApiV1MiscFacebookPages403Error1](content)
            case 404:
                return decode_json[ApiV1MiscFacebookPages404Error1](content)
            case 429:
                return decode_json[ApiV1MiscFacebookPages429Error1](content)
            case 500:
                return decode_json[ApiV1MiscFacebookPages500Error1](content)
            case 502:
                return decode_json[ApiV1MiscFacebookPages502Error1](content)
            case 503:
                return decode_json[ApiV1MiscFacebookPages503Error1](content)
            case 504:
                return decode_json[ApiV1MiscFacebookPages504Error1](content)
            case _:
                return RawError(status_code, content)


misc_facebook_search_pages_error_mapper: Final[
    ErrorMapper[MiscFacebookSearchPagesErrorBody]
] = _MiscFacebookSearchPagesError()
