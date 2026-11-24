from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_calls401_error1 import ApiV1Calls401Error1
from ..models.api_v1_calls403_error1 import ApiV1Calls403Error1

CallsShowErrorBody: TypeAlias = ApiV1Calls401Error1 | ApiV1Calls403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _CallsShowError:
    def map(self, status_code: int, content: bytes) -> CallsShowErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV1Calls401Error1](content)
            case 403:
                return decode_json[ApiV1Calls403Error1](content)
            case _:
                return RawError(status_code, content)


calls_show_error_mapper: Final[ErrorMapper[CallsShowErrorBody]] = _CallsShowError()
