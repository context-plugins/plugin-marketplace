from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.storage400_error1 import Storage400Error1
from ..models.storage403_error1 import Storage403Error1
from ..models.storage404_error1 import Storage404Error1
from ..models.storage503_error1 import Storage503Error1

GetStorageByKeyErrorBody: TypeAlias = (
    Storage400Error1 | Any | Storage403Error1 | Storage404Error1 | Storage503Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetStorageByKeyError:
    def map(self, status_code: int, content: bytes) -> GetStorageByKeyErrorBody:
        match status_code:
            case 400:
                return decode_json[Storage400Error1](content)
            case 401:
                return decode_json[Any](content)
            case 403:
                return decode_json[Storage403Error1](content)
            case 404:
                return decode_json[Storage404Error1](content)
            case 503:
                return decode_json[Storage503Error1](content)
            case _:
                return RawError(status_code, content)


get_storage_by_key_error_mapper: Final[ErrorMapper[GetStorageByKeyErrorBody]] = _GetStorageByKeyError()
