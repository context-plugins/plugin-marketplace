from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

GetApiV1CountriesByIdentifierErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1CountriesByIdentifierError:
    def map(self, status_code: int, content: bytes) -> GetApiV1CountriesByIdentifierErrorBody:
        match status_code:
            case 404:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_api_v1_countries_by_identifier_error_mapper: Final[
    ErrorMapper[GetApiV1CountriesByIdentifierErrorBody]
] = _GetApiV1CountriesByIdentifierError()
