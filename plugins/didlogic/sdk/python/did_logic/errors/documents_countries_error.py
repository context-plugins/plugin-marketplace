from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_documents_countries401_error1 import ApiV2DocumentsCountries401Error1

DocumentsCountriesErrorBody: TypeAlias = ApiV2DocumentsCountries401Error1 | RawError


@dataclass(frozen=True, slots=True)
class _DocumentsCountriesError:
    def map(self, status_code: int, content: bytes) -> DocumentsCountriesErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2DocumentsCountries401Error1](content)
            case _:
                return RawError(status_code, content)


documents_countries_error_mapper: Final[ErrorMapper[DocumentsCountriesErrorBody]] = _DocumentsCountriesError()
