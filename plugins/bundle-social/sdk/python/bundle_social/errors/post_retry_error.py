from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_post_retry400_error1 import ApiV1PostRetry400Error1
from ..models.api_v1_post_retry401_error1 import ApiV1PostRetry401Error1
from ..models.api_v1_post_retry403_error1 import ApiV1PostRetry403Error1
from ..models.api_v1_post_retry404_error1 import ApiV1PostRetry404Error1
from ..models.api_v1_post_retry429_error1 import ApiV1PostRetry429Error1
from ..models.api_v1_post_retry500_error1 import ApiV1PostRetry500Error1
from ..models.api_v1_post_retry502_error1 import ApiV1PostRetry502Error1
from ..models.api_v1_post_retry503_error1 import ApiV1PostRetry503Error1
from ..models.api_v1_post_retry504_error1 import ApiV1PostRetry504Error1

PostRetryErrorBody: TypeAlias = (
    ApiV1PostRetry400Error1
    | ApiV1PostRetry401Error1
    | ApiV1PostRetry403Error1
    | ApiV1PostRetry404Error1
    | ApiV1PostRetry429Error1
    | ApiV1PostRetry500Error1
    | ApiV1PostRetry502Error1
    | ApiV1PostRetry503Error1
    | ApiV1PostRetry504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _PostRetryError:
    def map(self, status_code: int, content: bytes) -> PostRetryErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PostRetry400Error1](content)
            case 401:
                return decode_json[ApiV1PostRetry401Error1](content)
            case 403:
                return decode_json[ApiV1PostRetry403Error1](content)
            case 404:
                return decode_json[ApiV1PostRetry404Error1](content)
            case 429:
                return decode_json[ApiV1PostRetry429Error1](content)
            case 500:
                return decode_json[ApiV1PostRetry500Error1](content)
            case 502:
                return decode_json[ApiV1PostRetry502Error1](content)
            case 503:
                return decode_json[ApiV1PostRetry503Error1](content)
            case 504:
                return decode_json[ApiV1PostRetry504Error1](content)
            case _:
                return RawError(status_code, content)


post_retry_error_mapper: Final[ErrorMapper[PostRetryErrorBody]] = _PostRetryError()
