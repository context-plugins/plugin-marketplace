from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetCloudflowTemplateErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetCloudflowTemplateError:
    def map(self, status_code: int, content: bytes) -> GetCloudflowTemplateErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_cloudflow_template_error_mapper: Final[ErrorMapper[GetCloudflowTemplateErrorBody]] = _GetCloudflowTemplateError()
