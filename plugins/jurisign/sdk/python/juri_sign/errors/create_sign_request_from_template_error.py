from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.message_response import MessageResponse
from ..models.validation_error1 import ValidationError1

CreateSignRequestFromTemplateErrorBody: TypeAlias = MessageResponse | ValidationError1 | RawError


@dataclass(frozen=True, slots=True)
class _CreateSignRequestFromTemplateError:
    def map(self, status_code: int, content: bytes) -> CreateSignRequestFromTemplateErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[MessageResponse](content)
            case 422:
                return decode_json[ValidationError1](content)
            case _:
                return RawError(status_code, content)


create_sign_request_from_template_error_mapper: Final[
    ErrorMapper[CreateSignRequestFromTemplateErrorBody]
] = _CreateSignRequestFromTemplateError()
