from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_pinterest_pin400_error1 import ApiV1MiscPinterestPin400Error1
from ..models.api_v1_misc_pinterest_pin401_error1 import ApiV1MiscPinterestPin401Error1
from ..models.api_v1_misc_pinterest_pin403_error1 import ApiV1MiscPinterestPin403Error1
from ..models.api_v1_misc_pinterest_pin404_error1 import ApiV1MiscPinterestPin404Error1
from ..models.api_v1_misc_pinterest_pin429_error1 import ApiV1MiscPinterestPin429Error1
from ..models.api_v1_misc_pinterest_pin500_error1 import ApiV1MiscPinterestPin500Error1
from ..models.api_v1_misc_pinterest_pin502_error1 import ApiV1MiscPinterestPin502Error1
from ..models.api_v1_misc_pinterest_pin503_error1 import ApiV1MiscPinterestPin503Error1
from ..models.api_v1_misc_pinterest_pin504_error1 import ApiV1MiscPinterestPin504Error1

MiscPinterestDeletePinErrorBody: TypeAlias = (
    ApiV1MiscPinterestPin400Error1
    | ApiV1MiscPinterestPin401Error1
    | ApiV1MiscPinterestPin403Error1
    | ApiV1MiscPinterestPin404Error1
    | ApiV1MiscPinterestPin429Error1
    | ApiV1MiscPinterestPin500Error1
    | ApiV1MiscPinterestPin502Error1
    | ApiV1MiscPinterestPin503Error1
    | ApiV1MiscPinterestPin504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscPinterestDeletePinError:
    def map(self, status_code: int, content: bytes) -> MiscPinterestDeletePinErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscPinterestPin400Error1](content)
            case 401:
                return decode_json[ApiV1MiscPinterestPin401Error1](content)
            case 403:
                return decode_json[ApiV1MiscPinterestPin403Error1](content)
            case 404:
                return decode_json[ApiV1MiscPinterestPin404Error1](content)
            case 429:
                return decode_json[ApiV1MiscPinterestPin429Error1](content)
            case 500:
                return decode_json[ApiV1MiscPinterestPin500Error1](content)
            case 502:
                return decode_json[ApiV1MiscPinterestPin502Error1](content)
            case 503:
                return decode_json[ApiV1MiscPinterestPin503Error1](content)
            case 504:
                return decode_json[ApiV1MiscPinterestPin504Error1](content)
            case _:
                return RawError(status_code, content)


misc_pinterest_delete_pin_error_mapper: Final[
    ErrorMapper[MiscPinterestDeletePinErrorBody]
] = _MiscPinterestDeletePinError()
