from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_numbers_search401_error1 import ApiV2NumbersSearch401Error1
from ..models.api_v2_numbers_search403_error1 import ApiV2NumbersSearch403Error1

NumbersSearchShowErrorBody: TypeAlias = ApiV2NumbersSearch401Error1 | ApiV2NumbersSearch403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _NumbersSearchShowError:
    def map(self, status_code: int, content: bytes) -> NumbersSearchShowErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2NumbersSearch401Error1](content)
            case 403:
                return decode_json[ApiV2NumbersSearch403Error1](content)
            case _:
                return RawError(status_code, content)


numbers_search_show_error_mapper: Final[ErrorMapper[NumbersSearchShowErrorBody]] = _NumbersSearchShowError()
