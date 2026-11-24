from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400_failed import Error400Failed
from ..models.error403 import Error403

GetPaymentsErrorBody: TypeAlias = Error400Failed | Error403 | str | RawError


@dataclass(frozen=True, slots=True)
class _GetPaymentsError:
    def map(self, status_code: int, content: bytes) -> GetPaymentsErrorBody:
        match status_code:
            case 400:
                return decode_json[Error400Failed](content)
            case 401:
                return decode_json[Error403](content)
            case 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


get_payments_error_mapper: Final[ErrorMapper[GetPaymentsErrorBody]] = _GetPaymentsError()
