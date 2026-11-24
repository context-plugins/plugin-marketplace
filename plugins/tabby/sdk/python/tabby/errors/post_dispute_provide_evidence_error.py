from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error400 import Error400
from ..models.error401_invalid_secret_key import Error401InvalidSecretKey
from ..models.error404_dispute_not_found import Error404DisputeNotFound

PostDisputeProvideEvidenceErrorBody: TypeAlias = (
    Error404DisputeNotFound | Error401InvalidSecretKey | Error400 | str | RawError
)


@dataclass(frozen=True, slots=True)
class _PostDisputeProvideEvidenceError:
    def map(self, status_code: int, content: bytes) -> PostDisputeProvideEvidenceErrorBody:
        match status_code:
            case 400 | 404:
                return decode_json[Error404DisputeNotFound](content)
            case 401:
                return decode_json[Error401InvalidSecretKey](content)
            case 409:
                return decode_json[Error400](content)
            case 500:
                return decode_json[str](content)
            case _:
                return RawError(status_code, content)


post_dispute_provide_evidence_error_mapper: Final[
    ErrorMapper[PostDisputeProvideEvidenceErrorBody]
] = _PostDisputeProvideEvidenceError()
