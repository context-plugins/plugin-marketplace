from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

GetTemplateErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetTemplateError:
    def map(self, status_code: int, content: bytes) -> GetTemplateErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


get_template_error_mapper: Final[ErrorMapper[GetTemplateErrorBody]] = _GetTemplateError()
