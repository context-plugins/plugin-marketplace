from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.reports400_error1 import Reports400Error1
from ..models.reports403_error21 import Reports403Error21
from ..models.reports404_error21 import Reports404Error21
from ..models.reports500_error21 import Reports500Error21

ListallreportsErrorBody: TypeAlias = (
    Reports400Error1 | Reports403Error21 | Reports404Error21 | Reports500Error21 | RawError
)


@dataclass(frozen=True, slots=True)
class _ListallreportsError:
    def map(self, status_code: int, content: bytes) -> ListallreportsErrorBody:
        match status_code:
            case 400:
                return decode_json[Reports400Error1](content)
            case 403:
                return decode_json[Reports403Error21](content)
            case 404:
                return decode_json[Reports404Error21](content)
            case 500:
                return decode_json[Reports500Error21](content)
            case _:
                return RawError(status_code, content)


listallreports_error_mapper: Final[ErrorMapper[ListallreportsErrorBody]] = _ListallreportsError()
