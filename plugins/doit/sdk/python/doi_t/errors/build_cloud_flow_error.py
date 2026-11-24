from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

BuildCloudFlowErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _BuildCloudFlowError:
    def map(self, status_code: int, content: bytes) -> BuildCloudFlowErrorBody:
        match status_code:
            case 400 | 401 | 403 | 406 | 500 | 502:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


build_cloud_flow_error_mapper: Final[ErrorMapper[BuildCloudFlowErrorBody]] = _BuildCloudFlowError()
