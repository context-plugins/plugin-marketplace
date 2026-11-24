from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.usage_limit_error import UsageLimitError

GetYearMakeModelOptionsErrorBody: TypeAlias = Error | UsageLimitError | RawError


@dataclass(frozen=True, slots=True)
class _GetYearMakeModelOptionsError:
    def map(self, status_code: int, content: bytes) -> GetYearMakeModelOptionsErrorBody:
        match status_code:
            case 400 | 401 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[UsageLimitError](content)
            case _:
                return RawError(status_code, content)


get_year_make_model_options_error_mapper: Final[
    ErrorMapper[GetYearMakeModelOptionsErrorBody]
] = _GetYearMakeModelOptionsError()
