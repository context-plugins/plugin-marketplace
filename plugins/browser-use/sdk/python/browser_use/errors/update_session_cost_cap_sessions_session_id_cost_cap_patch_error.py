from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _UpdateSessionCostCapSessionsSessionIdCostCapPatchError:
    def map(self, status_code: int, content: bytes) -> UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody:
        match status_code:
            case 403 | 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


update_session_cost_cap_sessions_session_id_cost_cap_patch_error_mapper: Final[
    ErrorMapper[UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody]
] = _UpdateSessionCostCapSessionsSessionIdCostCapPatchError()
