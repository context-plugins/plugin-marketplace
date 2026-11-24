from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.token400_error1 import Token400Error1
from ..models.token404_error1 import Token404Error1
from ..models.token500_error1 import Token500Error1

PostTokenErrorBody: TypeAlias = Token400Error1 | Token404Error1 | Token500Error1 | RawError


@dataclass(frozen=True, slots=True)
class _PostTokenError:
    def map(self, status_code: int, content: bytes) -> PostTokenErrorBody:
        match status_code:
            case 400:
                return decode_json[Token400Error1](content)
            case 404:
                return decode_json[Token404Error1](content)
            case 500:
                return decode_json[Token500Error1](content)
            case _:
                return RawError(status_code, content)


post_token_error_mapper: Final[ErrorMapper[PostTokenErrorBody]] = _PostTokenError()
