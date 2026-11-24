from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListFaxesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListFaxesError:
    def map(self, status_code: int, content: bytes) -> ListFaxesErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_faxes_error_mapper: Final[ErrorMapper[ListFaxesErrorBody]] = _ListFaxesError()
