from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1EvidenceWildfireV1EvidenceWildfireGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1EvidenceWildfireV1EvidenceWildfireGetError:
    def map(self, status_code: int, content: bytes) -> V1EvidenceWildfireV1EvidenceWildfireGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_evidence_wildfire_v1_evidence_wildfire_get_error_mapper: Final[
    ErrorMapper[V1EvidenceWildfireV1EvidenceWildfireGetErrorBody]
] = _V1EvidenceWildfireV1EvidenceWildfireGetError()
