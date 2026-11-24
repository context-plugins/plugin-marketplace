from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _FindallEntitySearchV1BetaFindallEntitySearchPostError:
    def map(self, status_code: int, content: bytes) -> FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


findall_entity_search_v1_beta_findall_entity_search_post_error_mapper: Final[
    ErrorMapper[FindallEntitySearchV1BetaFindallEntitySearchPostErrorBody]
] = _FindallEntitySearchV1BetaFindallEntitySearchPostError()
