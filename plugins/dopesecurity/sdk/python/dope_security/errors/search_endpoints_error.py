from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.errors_model import ErrorsModel

SearchEndpointsErrorBody: TypeAlias = ErrorsModel | RawError


@dataclass(frozen=True, slots=True)
class _SearchEndpointsError:
    def map(self, status_code: int, content: bytes) -> SearchEndpointsErrorBody:
        match status_code:
            case 400 | 403 | 500:
                return decode_json[ErrorsModel](content)
            case _:
                return RawError(status_code, content)


search_endpoints_error_mapper: Final[ErrorMapper[SearchEndpointsErrorBody]] = _SearchEndpointsError()
