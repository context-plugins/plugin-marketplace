from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetDataDictionaryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetDataDictionaryError:
    def map(self, status_code: int, content: bytes) -> GetDataDictionaryErrorBody:
        match status_code:
            case 400 | 401 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_data_dictionary_error_mapper: Final[ErrorMapper[GetDataDictionaryErrorBody]] = _GetDataDictionaryError()
