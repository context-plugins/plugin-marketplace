from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_hlr401_error1 import ApiV2Hlr401Error1
from ..models.api_v2_hlr403_error1 import ApiV2Hlr403Error1
from ..models.api_v2_hlr422_error1 import ApiV2Hlr422Error1

HlrCreateErrorBody: TypeAlias = ApiV2Hlr401Error1 | ApiV2Hlr403Error1 | ApiV2Hlr422Error1 | RawError


@dataclass(frozen=True, slots=True)
class _HlrCreateError:
    def map(self, status_code: int, content: bytes) -> HlrCreateErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2Hlr401Error1](content)
            case 403:
                return decode_json[ApiV2Hlr403Error1](content)
            case 422:
                return decode_json[ApiV2Hlr422Error1](content)
            case _:
                return RawError(status_code, content)


hlr_create_error_mapper: Final[ErrorMapper[HlrCreateErrorBody]] = _HlrCreateError()
