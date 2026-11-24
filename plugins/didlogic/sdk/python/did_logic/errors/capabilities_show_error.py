from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_capabilities401_error1 import ApiV1Capabilities401Error1

CapabilitiesShowErrorBody: TypeAlias = ApiV1Capabilities401Error1 | RawError


@dataclass(frozen=True, slots=True)
class _CapabilitiesShowError:
    def map(self, status_code: int, content: bytes) -> CapabilitiesShowErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV1Capabilities401Error1](content)
            case _:
                return RawError(status_code, content)


capabilities_show_error_mapper: Final[ErrorMapper[CapabilitiesShowErrorBody]] = _CapabilitiesShowError()
