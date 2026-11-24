from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error1 import Error1
from ..models.not_found1 import NotFound1
from ..models.unauthenticated1 import Unauthenticated1

SendSignRequestErrorBody: TypeAlias = Unauthenticated1 | NotFound1 | Error1 | RawError


@dataclass(frozen=True, slots=True)
class _SendSignRequestError:
    def map(self, status_code: int, content: bytes) -> SendSignRequestErrorBody:
        match status_code:
            case 401:
                return decode_json[Unauthenticated1](content)
            case 404:
                return decode_json[NotFound1](content)
            case 422:
                return decode_json[Error1](content)
            case _:
                return RawError(status_code, content)


send_sign_request_error_mapper: Final[ErrorMapper[SendSignRequestErrorBody]] = _SendSignRequestError()
