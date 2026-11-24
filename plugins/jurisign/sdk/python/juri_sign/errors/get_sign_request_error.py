from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found1 import NotFound1
from ..models.unauthenticated1 import Unauthenticated1

GetSignRequestErrorBody: TypeAlias = Unauthenticated1 | NotFound1 | RawError


@dataclass(frozen=True, slots=True)
class _GetSignRequestError:
    def map(self, status_code: int, content: bytes) -> GetSignRequestErrorBody:
        match status_code:
            case 401:
                return decode_json[Unauthenticated1](content)
            case 404:
                return decode_json[NotFound1](content)
            case _:
                return RawError(status_code, content)


get_sign_request_error_mapper: Final[ErrorMapper[GetSignRequestErrorBody]] = _GetSignRequestError()
