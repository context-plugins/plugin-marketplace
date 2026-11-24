from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

GetApiV2MeErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV2MeError:
    def map(self, status_code: int, content: bytes) -> GetApiV2MeErrorBody:
        match status_code:
            case 401:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


get_api_v2_me_error_mapper: Final[ErrorMapper[GetApiV2MeErrorBody]] = _GetApiV2MeError()
