from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_gates_cancel403_error1 import ApiV1GatesCancel403Error1
from ..models.api_v1_gates_cancel409_error1 import ApiV1GatesCancel409Error1

PostApiV1GatesByIdCancelErrorBody: TypeAlias = ApiV1GatesCancel403Error1 | ApiV1GatesCancel409Error1 | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1GatesByIdCancelError:
    def map(self, status_code: int, content: bytes) -> PostApiV1GatesByIdCancelErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1GatesCancel403Error1](content)
            case 409:
                return decode_json[ApiV1GatesCancel409Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_gates_by_id_cancel_error_mapper: Final[
    ErrorMapper[PostApiV1GatesByIdCancelErrorBody]
] = _PostApiV1GatesByIdCancelError()
