from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

ListTemplatesErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListTemplatesError:
    def map(self, status_code: int, content: bytes) -> ListTemplatesErrorBody:
        match status_code:
            case 401:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


list_templates_error_mapper: Final[ErrorMapper[ListTemplatesErrorBody]] = _ListTemplatesError()
