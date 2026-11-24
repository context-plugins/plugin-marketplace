from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

ListPublicFormsErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _ListPublicFormsError:
    def map(self, status_code: int, content: bytes) -> ListPublicFormsErrorBody:
        match status_code:
            case 401:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


list_public_forms_error_mapper: Final[ErrorMapper[ListPublicFormsErrorBody]] = _ListPublicFormsError()
