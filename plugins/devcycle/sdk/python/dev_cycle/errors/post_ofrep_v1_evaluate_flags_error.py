from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.ofrep_bulk_evaluation_failure import OfrepBulkEvaluationFailure
from ..models.ofrep_general_error_response import OfrepGeneralErrorResponse

PostOfrepV1EvaluateFlagsErrorBody: TypeAlias = OfrepBulkEvaluationFailure | OfrepGeneralErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostOfrepV1EvaluateFlagsError:
    def map(self, status_code: int, content: bytes) -> PostOfrepV1EvaluateFlagsErrorBody:
        match status_code:
            case 400:
                return decode_json[OfrepBulkEvaluationFailure](content)
            case 401 | 403 | 429:
                return RawError(status_code, content)
            case 500:
                return decode_json[OfrepGeneralErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_ofrep_v1_evaluate_flags_error_mapper: Final[
    ErrorMapper[PostOfrepV1EvaluateFlagsErrorBody]
] = _PostOfrepV1EvaluateFlagsError()
