from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.internal_server_exception import InternalServerException
from ..models.throttling_exception import ThrottlingException
from ..models.validation_exception import ValidationException

ListExportsErrorBody: TypeAlias = ValidationException | ThrottlingException | InternalServerException | RawError


@dataclass(frozen=True, slots=True)
class _ListExportsError:
    def map(self, status_code: int, content: bytes) -> ListExportsErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationException](content)
            case 429:
                return decode_json[ThrottlingException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


list_exports_error_mapper: Final[ErrorMapper[ListExportsErrorBody]] = _ListExportsError()
