from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post400_error1 import ApiV1Post400Error1
from ..models.api_v1_post401_error1 import ApiV1Post401Error1
from ..models.api_v1_post403_error1 import ApiV1Post403Error1
from ..models.api_v1_post404_error1 import ApiV1Post404Error1
from ..models.api_v1_post429_error1 import ApiV1Post429Error1
from ..models.api_v1_post500_error1 import ApiV1Post500Error1
from ..models.api_v1_post502_error1 import ApiV1Post502Error1
from ..models.api_v1_post503_error1 import ApiV1Post503Error1
from ..models.api_v1_post504_error1 import ApiV1Post504Error1

PostGetListErrorBody: TypeAlias = (
    ApiV1Post400Error1
    | ApiV1Post401Error1
    | ApiV1Post403Error1
    | ApiV1Post404Error1
    | ApiV1Post429Error1
    | ApiV1Post500Error1
    | ApiV1Post502Error1
    | ApiV1Post503Error1
    | ApiV1Post504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostGetListError:
    def map(self, status_code: int, content: bytes) -> PostGetListErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1Post400Error1](content)
            case 401:
                return decode_json[ApiV1Post401Error1](content)
            case 403:
                return decode_json[ApiV1Post403Error1](content)
            case 404:
                return decode_json[ApiV1Post404Error1](content)
            case 429:
                return decode_json[ApiV1Post429Error1](content)
            case 500:
                return decode_json[ApiV1Post500Error1](content)
            case 502:
                return decode_json[ApiV1Post502Error1](content)
            case 503:
                return decode_json[ApiV1Post503Error1](content)
            case 504:
                return decode_json[ApiV1Post504Error1](content)
            case _:
                return RawError(status_code, content)


post_get_list_error_mapper: Final[ErrorMapper[PostGetListErrorBody]] = _PostGetListError()
