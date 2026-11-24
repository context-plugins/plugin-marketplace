from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1400_error1 import ApiV1400Error1
from ..models.api_v1401_error1 import ApiV1401Error1
from ..models.api_v1403_error1 import ApiV1403Error1
from ..models.api_v1404_error1 import ApiV1404Error1
from ..models.api_v1429_error1 import ApiV1429Error1
from ..models.api_v1500_error1 import ApiV1500Error1
from ..models.api_v1502_error1 import ApiV1502Error1
from ..models.api_v1503_error1 import ApiV1503Error1
from ..models.api_v1504_error1 import ApiV1504Error1

AppGetHealthErrorBody: TypeAlias = (
    ApiV1400Error1
    | ApiV1401Error1
    | ApiV1403Error1
    | ApiV1404Error1
    | ApiV1429Error1
    | ApiV1500Error1
    | ApiV1502Error1
    | ApiV1503Error1
    | ApiV1504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _AppGetHealthError:
    def map(self, status_code: int, content: bytes) -> AppGetHealthErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1400Error1](content)
            case 401:
                return decode_json[ApiV1401Error1](content)
            case 403:
                return decode_json[ApiV1403Error1](content)
            case 404:
                return decode_json[ApiV1404Error1](content)
            case 429:
                return decode_json[ApiV1429Error1](content)
            case 500:
                return decode_json[ApiV1500Error1](content)
            case 502:
                return decode_json[ApiV1502Error1](content)
            case 503:
                return decode_json[ApiV1503Error1](content)
            case 504:
                return decode_json[ApiV1504Error1](content)
            case _:
                return RawError(status_code, content)


app_get_health_error_mapper: Final[ErrorMapper[AppGetHealthErrorBody]] = _AppGetHealthError()
