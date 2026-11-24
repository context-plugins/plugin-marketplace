from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.ofrep_evaluation_failure import OfrepEvaluationFailure
from ..models.ofrep_flag_not_found import OfrepFlagNotFound
from ..models.ofrep_general_error_response import OfrepGeneralErrorResponse

PostOfrepV1EvaluateFlagsByKeyErrorBody: TypeAlias = (
    OfrepEvaluationFailure | OfrepFlagNotFound | OfrepGeneralErrorResponse | RawError
)


@dataclass(frozen=True, slots=True)
class _PostOfrepV1EvaluateFlagsByKeyError:
    def map(self, status_code: int, content: bytes) -> PostOfrepV1EvaluateFlagsByKeyErrorBody:
        match status_code:
            case 400:
                return decode_json[OfrepEvaluationFailure](content)
            case 401 | 403 | 429:
                return RawError(status_code, content)
            case 404:
                return decode_json[OfrepFlagNotFound](content)
            case 500:
                return decode_json[OfrepGeneralErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_ofrep_v1_evaluate_flags_by_key_error_mapper: Final[
    ErrorMapper[PostOfrepV1EvaluateFlagsByKeyErrorBody]
] = _PostOfrepV1EvaluateFlagsByKeyError()
