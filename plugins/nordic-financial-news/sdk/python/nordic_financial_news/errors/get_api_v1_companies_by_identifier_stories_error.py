from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_details import ProblemDetails

GetApiV1CompaniesByIdentifierStoriesErrorBody: TypeAlias = ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1CompaniesByIdentifierStoriesError:
    def map(self, status_code: int, content: bytes) -> GetApiV1CompaniesByIdentifierStoriesErrorBody:
        match status_code:
            case 400:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


get_api_v1_companies_by_identifier_stories_error_mapper: Final[
    ErrorMapper[GetApiV1CompaniesByIdentifierStoriesErrorBody]
] = _GetApiV1CompaniesByIdentifierStoriesError()
