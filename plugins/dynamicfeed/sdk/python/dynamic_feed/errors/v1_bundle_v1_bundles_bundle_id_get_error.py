from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

V1BundleV1BundlesBundleIdGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _V1BundleV1BundlesBundleIdGetError:
    def map(self, status_code: int, content: bytes) -> V1BundleV1BundlesBundleIdGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


v1_bundle_v1_bundles_bundle_id_get_error_mapper: Final[
    ErrorMapper[V1BundleV1BundlesBundleIdGetErrorBody]
] = _V1BundleV1BundlesBundleIdGetError()
