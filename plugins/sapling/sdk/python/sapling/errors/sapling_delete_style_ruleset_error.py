from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.rate_limited1 import RateLimited1

SaplingDeleteStyleRulesetErrorBody: TypeAlias = Error | RateLimited1 | RawError


@dataclass(frozen=True, slots=True)
class _SaplingDeleteStyleRulesetError:
    def map(self, status_code: int, content: bytes) -> SaplingDeleteStyleRulesetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[RateLimited1](content)
            case _:
                return RawError(status_code, content)


sapling_delete_style_ruleset_error_mapper: Final[
    ErrorMapper[SaplingDeleteStyleRulesetErrorBody]
] = _SaplingDeleteStyleRulesetError()
