from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1NotaryFeedsListV1NotaryFeedsGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1NotaryFeedsListV1NotaryFeedsGetError:
    def map(self, status_code: int, content: bytes) -> V1NotaryFeedsListV1NotaryFeedsGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_notary_feeds_list_v1_notary_feeds_get_error_mapper: Final[
    ErrorMapper[V1NotaryFeedsListV1NotaryFeedsGetErrorBody]
] = _V1NotaryFeedsListV1NotaryFeedsGetError()
