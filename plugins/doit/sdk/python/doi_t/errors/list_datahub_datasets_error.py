from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListDatahubDatasetsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListDatahubDatasetsError:
    def map(self, status_code: int, content: bytes) -> ListDatahubDatasetsErrorBody:
        match status_code:
            case 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_datahub_datasets_error_mapper: Final[ErrorMapper[ListDatahubDatasetsErrorBody]] = _ListDatahubDatasetsError()
