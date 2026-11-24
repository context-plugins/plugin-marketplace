from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400 import Error400
from ..models.error401_key_doesnt_exist import Error401KeyDoesntExist
from ..models.error403 import Error403

GetCheckoutSessionErrorBody: TypeAlias = Error400 | Error401KeyDoesntExist | Error403 | str | RawError


@dataclass(frozen=True, slots=True)
class _GetCheckoutSessionError:
    def map(self, status_code: int, content: bytes) -> GetCheckoutSessionErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400](content)
            case 401:
                return decode_json[Error401KeyDoesntExist](content)
            case 403:
                return decode_json[Error403](content)
            case 404 | 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_checkout_session_error_mapper: Final[ErrorMapper[GetCheckoutSessionErrorBody]] = _GetCheckoutSessionError()
