from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse

RotatePublicFormTokenErrorBody: TypeAlias = MessageResponse | RawError


@dataclass(frozen=True, slots=True)
class _RotatePublicFormTokenError:
    def map(self, status_code: int, content: bytes) -> RotatePublicFormTokenErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[MessageResponse](content)
            case _:
                return RawError(status_code, content)


rotate_public_form_token_error_mapper: Final[
    ErrorMapper[RotatePublicFormTokenErrorBody]
] = _RotatePublicFormTokenError()
