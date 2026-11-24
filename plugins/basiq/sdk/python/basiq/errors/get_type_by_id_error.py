from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.events400_error21 import Events400Error21
from ..models.events401_error21 import Events401Error21
from ..models.events403_error21 import Events403Error21
from ..models.events404_error21 import Events404Error21
from ..models.events429_error1 import Events429Error1
from ..models.events500_error21 import Events500Error21
from ..models.events503_error21 import Events503Error21

GetTypeByIdErrorBody: TypeAlias = (
    Events400Error21
    | Events401Error21
    | Events403Error21
    | Events404Error21
    | Events429Error1
    | Events500Error21
    | Events503Error21
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetTypeByIdError:
    def map(self, status_code: int, content: bytes) -> GetTypeByIdErrorBody:
        match status_code:
            case 400:
                return decode_json[Events400Error21](content)
            case 401:
                return decode_json[Events401Error21](content)
            case 403:
                return decode_json[Events403Error21](content)
            case 404:
                return decode_json[Events404Error21](content)
            case 429:
                return decode_json[Events429Error1](content)
            case 500:
                return decode_json[Events500Error21](content)
            case 503:
                return decode_json[Events503Error21](content)
            case _:
                return RawError(status_code, content)


get_type_by_id_error_mapper: Final[ErrorMapper[GetTypeByIdErrorBody]] = _GetTypeByIdError()
