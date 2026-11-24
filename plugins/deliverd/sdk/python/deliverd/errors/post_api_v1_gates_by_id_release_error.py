from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_gates_release403_error1 import ApiV1GatesRelease403Error1

PostApiV1GatesByIdReleaseErrorBody: TypeAlias = ApiV1GatesRelease403Error1 | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1GatesByIdReleaseError:
    def map(self, status_code: int, content: bytes) -> PostApiV1GatesByIdReleaseErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1GatesRelease403Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_gates_by_id_release_error_mapper: Final[
    ErrorMapper[PostApiV1GatesByIdReleaseErrorBody]
] = _PostApiV1GatesByIdReleaseError()
