from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_reference_key400_error1 import ApiV1PostReferenceKey400Error1
from ..models.api_v1_post_reference_key401_error1 import ApiV1PostReferenceKey401Error1
from ..models.api_v1_post_reference_key403_error1 import ApiV1PostReferenceKey403Error1
from ..models.api_v1_post_reference_key404_error1 import ApiV1PostReferenceKey404Error1
from ..models.api_v1_post_reference_key429_error1 import ApiV1PostReferenceKey429Error1
from ..models.api_v1_post_reference_key500_error1 import ApiV1PostReferenceKey500Error1
from ..models.api_v1_post_reference_key502_error1 import ApiV1PostReferenceKey502Error1
from ..models.api_v1_post_reference_key503_error1 import ApiV1PostReferenceKey503Error1
from ..models.api_v1_post_reference_key504_error1 import ApiV1PostReferenceKey504Error1

PostGetByReferenceKeyErrorBody: TypeAlias = (
    ApiV1PostReferenceKey400Error1
    | ApiV1PostReferenceKey401Error1
    | ApiV1PostReferenceKey403Error1
    | ApiV1PostReferenceKey404Error1
    | ApiV1PostReferenceKey429Error1
    | ApiV1PostReferenceKey500Error1
    | ApiV1PostReferenceKey502Error1
    | ApiV1PostReferenceKey503Error1
    | ApiV1PostReferenceKey504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostGetByReferenceKeyError:
    def map(self, status_code: int, content: bytes) -> PostGetByReferenceKeyErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostReferenceKey400Error1](content)
            case 401:
                return decode_json[ApiV1PostReferenceKey401Error1](content)
            case 403:
                return decode_json[ApiV1PostReferenceKey403Error1](content)
            case 404:
                return decode_json[ApiV1PostReferenceKey404Error1](content)
            case 429:
                return decode_json[ApiV1PostReferenceKey429Error1](content)
            case 500:
                return decode_json[ApiV1PostReferenceKey500Error1](content)
            case 502:
                return decode_json[ApiV1PostReferenceKey502Error1](content)
            case 503:
                return decode_json[ApiV1PostReferenceKey503Error1](content)
            case 504:
                return decode_json[ApiV1PostReferenceKey504Error1](content)
            case _:
                return RawError(status_code, content)


post_get_by_reference_key_error_mapper: Final[
    ErrorMapper[PostGetByReferenceKeyErrorBody]
] = _PostGetByReferenceKeyError()
