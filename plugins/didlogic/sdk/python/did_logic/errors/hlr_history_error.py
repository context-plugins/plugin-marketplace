from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_hlr_history401_error1 import ApiV2HlrHistory401Error1
from ..models.api_v2_hlr_history403_error1 import ApiV2HlrHistory403Error1

HlrHistoryErrorBody: TypeAlias = ApiV2HlrHistory401Error1 | ApiV2HlrHistory403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _HlrHistoryError:
    def map(self, status_code: int, content: bytes) -> HlrHistoryErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2HlrHistory401Error1](content)
            case 403:
                return decode_json[ApiV2HlrHistory403Error1](content)
            case _:
                return RawError(status_code, content)


hlr_history_error_mapper: Final[ErrorMapper[HlrHistoryErrorBody]] = _HlrHistoryError()
