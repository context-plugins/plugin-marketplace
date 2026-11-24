from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

GetApiV1IndicesByIdentifierCompaniesErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1IndicesByIdentifierCompaniesError:
    def map(self, status_code: int, content: bytes) -> GetApiV1IndicesByIdentifierCompaniesErrorBody:
        match status_code:
            case 404:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_api_v1_indices_by_identifier_companies_error_mapper: Final[
    ErrorMapper[GetApiV1IndicesByIdentifierCompaniesErrorBody]
] = _GetApiV1IndicesByIdentifierCompaniesError()
