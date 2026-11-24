from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1NotaryFeedRegisterV1NotaryFeedsPostError:
    def map(self, status_code: int, content: bytes) -> V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_notary_feed_register_v1_notary_feeds_post_error_mapper: Final[
    ErrorMapper[V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody]
] = _V1NotaryFeedRegisterV1NotaryFeedsPostError()
