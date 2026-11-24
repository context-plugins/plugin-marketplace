from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetPropertyByUrlErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetPropertyByUrlError:
    def map(self, status_code: int, content: bytes) -> GetPropertyByUrlErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 502 | 504:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_property_by_url_error_mapper: Final[ErrorMapper[GetPropertyByUrlErrorBody]] = _GetPropertyByUrlError()
