from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.rate_limited1 import RateLimited1

SaplingListStyleRulesetsErrorBody: TypeAlias = Error | RateLimited1 | RawError


@dataclass(frozen=True, slots=True)
class _SaplingListStyleRulesetsError:
    def map(self, status_code: int, content: bytes) -> SaplingListStyleRulesetsErrorBody:
        match status_code:
            case 401 | 403 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[RateLimited1](content)
            case _:
                return RawError(status_code, content)


sapling_list_style_rulesets_error_mapper: Final[
    ErrorMapper[SaplingListStyleRulesetsErrorBody]
] = _SaplingListStyleRulesetsError()
