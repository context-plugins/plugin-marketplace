from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

GetPublicFormErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetPublicFormError:
    def map(self, status_code: int, content: bytes) -> GetPublicFormErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


get_public_form_error_mapper: Final[ErrorMapper[GetPublicFormErrorBody]] = _GetPublicFormError()
