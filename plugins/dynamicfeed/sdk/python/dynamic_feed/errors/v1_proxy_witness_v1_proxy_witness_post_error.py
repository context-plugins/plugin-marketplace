from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1ProxyWitnessV1ProxyWitnessPostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1ProxyWitnessV1ProxyWitnessPostError:
    def map(self, status_code: int, content: bytes) -> V1ProxyWitnessV1ProxyWitnessPostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_proxy_witness_v1_proxy_witness_post_error_mapper: Final[
    ErrorMapper[V1ProxyWitnessV1ProxyWitnessPostErrorBody]
] = _V1ProxyWitnessV1ProxyWitnessPostError()
