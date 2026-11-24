from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCloudflowTemplate2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCloudflowTemplate2Error:
    def map(self, status_code: int, content: bytes) -> GetCloudflowTemplate2ErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_cloudflow_template2_error_mapper: Final[ErrorMapper[GetCloudflowTemplate2ErrorBody]] = _GetCloudflowTemplate2Error()
