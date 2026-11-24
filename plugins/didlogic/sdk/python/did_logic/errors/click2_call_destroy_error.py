from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_click2_call401_error1 import ApiV1Click2Call401Error1
from ..models.api_v1_click2_call403_error1 import ApiV1Click2Call403Error1
from ..models.api_v1_click2_call404_error1 import ApiV1Click2Call404Error1

Click2CallDestroyErrorBody: TypeAlias = (
    ApiV1Click2Call401Error1 | ApiV1Click2Call403Error1 | ApiV1Click2Call404Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _Click2CallDestroyError:
    def map(self, status_code: int, content: bytes) -> Click2CallDestroyErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV1Click2Call401Error1](content)
            case 403:
                return decode_json[ApiV1Click2Call403Error1](content)
            case 404:
                return decode_json[ApiV1Click2Call404Error1](content)
            case _:
                return RawError(status_code, content)


click2_call_destroy_error_mapper: Final[ErrorMapper[Click2CallDestroyErrorBody]] = _Click2CallDestroyError()
