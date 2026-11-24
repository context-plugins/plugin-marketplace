from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

GetBulkTemplateErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetBulkTemplateError:
    def map(self, status_code: int, content: bytes) -> GetBulkTemplateErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


get_bulk_template_error_mapper: Final[ErrorMapper[GetBulkTemplateErrorBody]] = _GetBulkTemplateError()
